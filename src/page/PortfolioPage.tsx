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
      symbol: "MSFT",
      name: "Microsoft Corporation",
      purchasePrice: 374.39,
      quantity: 10,
      exchange: "NMS",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet",
      purchasePrice: 2800,
      quantity: 5,
      exchange: "NASDAQ",
    },
    {
      symbol: "AMZN",
      name: "Amazon",
      purchasePrice: 3300,
      quantity: 2,
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
      symbol: "NFLX",
      name: "Netflix",
      purchasePrice: 500,
      quantity: 12,
      exchange: "NASDAQ",
    },
    {
      symbol: "NVDA",
      name: "NVIDIA",
      purchasePrice: 220,
      quantity: 20,
      exchange: "NASDAQ",
    },
    {
      symbol: "FB",
      name: "Meta Platforms",
      purchasePrice: 250,
      quantity: 7,
      exchange: "NASDAQ",
    },
    {
      symbol: "INTC",
      name: "Intel",
      purchasePrice: 60,
      quantity: 25,
      exchange: "NASDAQ",
    },
    {
      symbol: "ORCL",
      name: "Oracle",
      purchasePrice: 90,
      quantity: 10,
      exchange: "NYSE",
    },
    {
      symbol: "IBM",
      name: "IBM",
      purchasePrice: 140,
      quantity: 6,
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

// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import PortfolioTable from "../components/table/PortfolioTable";
// import { useState } from "react";
// import { fetchPortfolioStockAPI } from "../service/stock-service";
// import { toast } from "react-toastify";

// const PortfolioPage = () => {
//   const {
//     data = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["PortfolioStockQuery"],
//     queryFn: async () => {
//       try {
//         const response = await fetchPortfolioStockAPI();
//         console.log("responseresponse: ", response);
//         return response || [];
//       } catch (error: any) {
//         toast.error(error.message || "Error fetching tokenizations");
//         throw error;
//       }
//     },
//   });

//   console.log("data: ", data);

//   return (
//     <>
//       <div className="flex">{data && <PortfolioTable portfolio={data} />}</div>
//     </>
//   );
// };

// export default PortfolioPage;
