
export type StockRowDataType = {
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