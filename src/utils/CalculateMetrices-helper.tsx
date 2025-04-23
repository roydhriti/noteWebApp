import { StockRowDataType } from "../data/data-type/Stock-DataType";

export const calculateMetrics = ({
  purchasePrice,
  quantity,
  totalInvestment,
  cmp,
  peRatio,
  earnings,
  sector,
  ...rest
}: any): StockRowDataType => {
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

export const getColumns = () => [
  { Header: "Stock", accessor: "name" },
  { Header: "Purchase Price", accessor: "purchasePrice" },
  { Header: "Qty", accessor: "quantity" },
  { Header: "Investment", accessor: "investment" },
  {
    Header: "Portfolio %",
    accessor: "portfolioPercent",
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
];

export const renderGroupHeader = (
  sector: string,
  stocks: any[],
  columnSpan: number
) => {
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
      <td colSpan={columnSpan} className="px-4 py-2 font-semibold">
        {sector} — Total Investment: ₹{totalInvestment.toFixed(2)} | Portfolio
        %: {totalPercent.toFixed(2)}%
      </td>
    </tr>
  );
};
