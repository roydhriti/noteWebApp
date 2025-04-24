// import PortfolioTable from "../components/table/PortfolioTable";

// const PortfolioPage = () => {
//   const portfolio = [
//     {
//       symbol: "MSFT",
//       name: "Microsoft",
//       purchasePrice: 150,
//       quantity: 10,
//       exchange: "NASDAQ",
//     },
//     {
//       symbol: "AAPL",
//       name: "Apple",
//       purchasePrice: 145,
//       quantity: 15,
//       exchange: "NASDAQ",
//     },

//     {
//       exchange: "NMS",
//       name: "Microsoft Corporation",
//       purchasePrice: 374.39,
//       quantity: 10,
//       symbol: "MSFT",
//     },
//   ];

//   return (
//     <>
//       <div className="flex">
//         <PortfolioTable portfolio={portfolio} />
//       </div>
//     </>
//   );
// };

// export default PortfolioPage;

import { useQuery, useQueryClient } from "@tanstack/react-query";
import PortfolioTable from "../components/table/PortfolioTable";
import { useState } from "react";
import { fetchPortfolioStockAPI } from "../service/stock-service";
import { toast } from "react-toastify";

const PortfolioPage = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PortfolioStockQuery"],
    queryFn: async () => {
      try {
        const response = await fetchPortfolioStockAPI();
        console.log("responseresponse: ", response);
        return response || [];
      } catch (error: any) {
        toast.error(error.message || "Error fetching tokenizations");
        throw error;
      }
    },
  });

  console.log("data: ", data);

  return (
    <>
      <div className="flex">{data && <PortfolioTable portfolio={data} />}</div>
    </>
  );
};

export default PortfolioPage;
