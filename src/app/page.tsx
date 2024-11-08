"use client";
import App from "./app";
import { RegionContextProvider } from "@/components/Contexts/RegionContext";

export default function Home() {
  return (
    <RegionContextProvider>
      <App />
    </RegionContextProvider>
  );
}
