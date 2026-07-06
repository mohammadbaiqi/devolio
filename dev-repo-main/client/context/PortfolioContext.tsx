import { createContext, useContext } from "react";

type PortfolioContextType = {
  name: string;
};

export const PortfolioContext = createContext<PortfolioContextType>({ name: "raif" });

export function usePortfolio() {
  return useContext(PortfolioContext);
}
