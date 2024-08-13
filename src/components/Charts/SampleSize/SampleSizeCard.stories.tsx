import { useState } from "react";
import { SampleSizeCard } from "./SampleSizeCard";
const meta = {
  component: SampleSizeCard,
};
export default meta;

export const Default = () => {
  return (
    <div className="flex flex-col gap-10">
      <SampleSizeCard region={"Global"} />
      <SampleSizeCard region={"Pacific"} />
    </div>
  );
};
