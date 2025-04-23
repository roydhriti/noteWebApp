import PortfolioTable from "../components/table/PortfolioTable";

const PortfolioPage = () => {
  const portfolio = [
    {
      symbol: "MSFT",
      name: "Microsoft",
      purchasePrice: 150,
      quantity: 10,
      exchange: "NASDAQ",
    },
    {
      symbol: "AAPL",
      name: "Apple",
      purchasePrice: 145,
      quantity: 15,
      exchange: "NASDAQ",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet (Google)",
      purchasePrice: 2500,
      quantity: 5,
      exchange: "NASDAQ",
    },
    {
      symbol: "AMZN",
      name: "Amazon",
      purchasePrice: 3300,
      quantity: 7,
      exchange: "NASDAQ",
    },
    {
      symbol: "TSLA",
      name: "Tesla",
      purchasePrice: 700,
      quantity: 8,
      exchange: "NASDAQ",
    },
    {
      symbol: "META",
      name: "Meta Platforms",
      purchasePrice: 350,
      quantity: 12,
      exchange: "NASDAQ",
    },
    {
      symbol: "NVDA",
      name: "NVIDIA",
      purchasePrice: 550,
      quantity: 6,
      exchange: "NASDAQ",
    },
    {
      symbol: "INTC",
      name: "Intel",
      purchasePrice: 60,
      quantity: 20,
      exchange: "NASDAQ",
    },
    {
      symbol: "TSM",
      name: "TSMC",
      purchasePrice: 115,
      quantity: 10,
      exchange: "NYSE",
    },
    {
      symbol: "SPY",
      name: "SPDR S&P 500 ETF",
      purchasePrice: 450,
      quantity: 15,
      exchange: "NYSE",
    },
  ];

  return (
    <>
      <div className="flex">
        <PortfolioTable portfolio={portfolio} />
      </div>
    </>
  );
};

export default PortfolioPage;
