"use client";
import { DataProvider, ProviderProps } from "./DataProvider";

export const AppProviders = ({ children }: ProviderProps) => {
  return <DataProvider>{children}</DataProvider>;
};
