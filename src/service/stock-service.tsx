import { apiClient } from "../config/apiClient";

export const fetchStockDataAPI = (symbol: any): Promise<any> =>
  apiClient<any>(`/stocks/api/stock-data?symbol=${symbol}`, "GET");

export const fetchPortfolioStockAPI = (): Promise<any> =>
  apiClient<any>("/stocks/api/portfolio-stocks/", "GET");
