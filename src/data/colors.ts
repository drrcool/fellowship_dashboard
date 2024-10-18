export const chartColors = [
  "#16838d",
  "#6d3be3",
  "#4ab4dc",
  "#f59f00",
  "#db5b24",
  "#e75094",
  "#8b165d",
  "#233371",
  "#2172e3",
  "#afe1e6",
  "#bda1fd",
  "#fbb698",
  "#94c2ff",
  "#f6c5db",
  "#41b1ba",
  "#a37efa",
  "#69a8ff",
  "#f2ab68",
  "#ef7744",
  "#f276ae",
  "#792a95",
  "#2c429c",
  "#1376bf",
  "#196f77",
  "#4a2a96",
  "#99421d",
  "#1c4072",
  "#6c1e41",
];

export const getColors = (valueList: string[]) => {
  const n = valueList.length;
  const colorList = {} as Record<string, string>;
  for (let i = 0; i < n; i++) {
    colorList[valueList[i]] = chartColors[i % chartColors.length];
  }
  return colorList;
};
