import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import { fetchStockDataAPI } from "../../service/stock-service";
import { StockRowDataType } from "../../data/data-type/Stock-DataType";
import {
  calculateMetrics,
  getColumns,
  renderGroupHeader,
} from "../../utils/CalculateMetrices-helper";
// import { calculateMetrics, getColumns, renderGroupHeader } from "./utils";

const PortfolioTable = ({ portfolio }: { portfolio: any[] }) => {
  const [rows, setRows] = useState<StockRowDataType[]>([]);

  const fetchData = async () => {
    const totalInvestment = portfolio.reduce(
      (acc, s) => acc + s.purchasePrice * s.quantity,
      0
    );

    const updatedData = await Promise.all(
      portfolio.map(async (stock) => {
        const result = await fetchStockDataAPI(stock.symbol);
        if (result.error) return { ...stock, error: true };
        const { cmp, peRatio, earnings, sector } = result;

        return calculateMetrics({
          ...stock,
          totalInvestment,
          cmp,
          peRatio,
          earnings,
          sector,
        });
      })
    );

    setRows(updatedData);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  const columns = React.useMemo(() => getColumns(), []);
  const tableInstance = useTable({ columns, data: rows });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows: tableRows,
    prepareRow,
  } = tableInstance;

  const groupedData: Record<string, StockRowDataType[]> = {};
  tableRows.forEach((row: any) => {
    prepareRow(row);
    const sector = row.original.sector || "Unknown Sector";
    if (!groupedData[sector]) groupedData[sector] = [];
    groupedData[sector].push(row);
  });

  return (
    <div className="overflow-x-auto p-4">
      <table {...getTableProps()} className="table-auto w-full">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className="border px-4 py-2 bg-gray-100 text-left"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {Object.entries(groupedData).map(([sector, rows]) => (
            <React.Fragment key={sector}>
              {renderGroupHeader(sector, rows, columns.length)}
              {rows.map((row: any) => (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <td {...cell.getCellProps()} className="border px-4 py-2">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
