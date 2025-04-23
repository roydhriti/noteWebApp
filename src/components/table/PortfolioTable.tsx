import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import { fetchStockDataAPI } from "../../service/stock-service";

type StockRow = {
  name: string;
  purchasePrice: number;
  quantity: number;
  exchange: string;
  cmp: number;
  peRatio: string;
  earnings: string;
  investment: number;
  presentValue: number;
  gainLoss: number;
  portfolioPercent: number;
  sector: string;
  [key: string]: any;
};

const calculateMetrics = ({
  purchasePrice,
  quantity,
  totalInvestment,
  cmp,
  peRatio,
  earnings,
  sector,
  ...rest
}: any): StockRow => {
  const investment = purchasePrice * quantity;
  const presentValue = cmp * quantity;
  const gainLoss = presentValue - investment;
  const portfolioPercent = (investment / totalInvestment) * 100;

  return {
    ...rest,
    purchasePrice,
    quantity,
    cmp,
    peRatio,
    earnings,
    investment,
    presentValue,
    gainLoss,
    portfolioPercent,
    sector: sector || "Unknown Sector",
  };
};

const PortfolioTable = ({ portfolio }: { portfolio: any[] }) => {
  const [rows, setRows] = useState<StockRow[]>([]);

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

  const columns = React.useMemo(
    () => [
      { Header: "Stock", accessor: "name" },
      { Header: "Purchase Price", accessor: "purchasePrice" },
      { Header: "Qty", accessor: "quantity" },
      { Header: "Investment", accessor: "investment" },
      {
        Header: "Portfolio %",
        accessor: "portfolioPercent",
        // Cell: ({ value }: any) => value?.toFixed(2) + "%",
        Cell: ({ value }: any) => <span>{value.toFixed(2)}%</span>,
      },
      { Header: "Exchange", accessor: "exchange" },
      { Header: "CMP", accessor: "cmp" },
      { Header: "Present Value", accessor: "presentValue" },
      {
        Header: "Gain/Loss",
        accessor: "gainLoss",
        Cell: ({ value }: any) => (
          <span className={value >= 0 ? "text-green-600" : "text-red-600"}>
            {value.toFixed(2)}
          </span>
        ),
      },
      { Header: "P/E Ratio", accessor: "peRatio" },
      { Header: "Earnings", accessor: "earnings" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: rows });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows: tableRows,
    prepareRow,
  } = tableInstance;

  // Group rows by sector
  const groupedData: Record<string, StockRow[]> = {};
  tableRows.forEach((row: any) => {
    prepareRow(row);
    const sector = row.original.sector || "Unknown Sector";
    if (!groupedData[sector]) groupedData[sector] = [];
    groupedData[sector].push(row);
  });

  const renderGroupHeader = (sector: string, stocks: StockRow[]) => {
    const totalInvestment = stocks.reduce(
      (sum, r) => sum + r.original.investment,
      0
    );
    const totalPercent = stocks.reduce(
      (sum, r) => sum + r.original.portfolioPercent,
      0
    );

    return (
      <tr className="bg-blue-100">
        <td colSpan={columns.length} className="px-4 py-2 font-semibold">
          {sector} — Total Investment: ₹{totalInvestment.toFixed(2)} | Portfolio
          %: {totalPercent.toFixed(2)}%
        </td>
      </tr>
    );
  };

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
              {renderGroupHeader(sector, rows)}
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
