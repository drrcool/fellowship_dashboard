import { Tooltip } from "react-tooltip";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import usCanadaGeo from "../../data/usacanadageojson.json";
import { DataPoint, useData } from "@/hooks/useData";
import { ReactNode, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";

const getResponseData = (data: DataPoint[]) => {
  const values = data.reduce((acc, d) => {
    if (d.state) {
      acc[d.state] = acc[d.state] ? acc[d.state] + 1 : 1;
    }
    return acc;
  }, {} as Record<string, number>);
  const maxValue = Math.max(...Object.values(values));
  const output = Object.entries(values).reduce((acc, [state, population]) => {
    acc[state] = {
      rate: null,
      count: null,
      population,
    };
    return acc;
  }, {} as Record<string, { rate: number | null; population: number; count: number | null }>);
  return { values: output, maxValue };
};

const getSurveyData = (
  data: DataPoint[],
  question: string,
  responses: string[]
) => {
  const values = data
    .map((d) => {
      if (d.state) {
        const response = d[question as keyof typeof d] as string;
        const matches: boolean = Array.isArray(response)
          ? response.some((r) => responses.includes(r))
          : responses.includes(response);
        return { state: d.state, matches, population: 1 };
      }
    })
    .filter((d) => d !== undefined);
  const outputValues = values.reduce((acc, { state, matches, population }) => {
    const matchValue = matches ? 1 : 0;
    const newMatchCount = acc[state]
      ? acc[state].count + matchValue
      : matchValue;
    const newPopulation = acc[state]
      ? acc[state].population + population
      : population;
    acc[state] = {
      count: newMatchCount,
      population: newPopulation,
      rate: newPopulation > 0 ? (1.0 * newMatchCount) / newPopulation : 0,
    };
    return acc;
  }, {} as Record<string, { count: number; population: number; rate: number }>);
  const maxValue = Math.max(...Object.values(outputValues).map((v) => v.rate));
  return { values: outputValues, maxValue };
};

const getQuestionData = (
  data: DataPoint[],
  question: string,
  responses: string[]
) => {
  if (question === "response_rate") {
    return getResponseData(data);
  }
  return getSurveyData(data, question, responses);
};

const makeTooltip = (
  geo: string,
  value: number | null,
  count: number | null,
  population: number
) => {
  return (
    <div>
      <p>{geo}</p>
      {value !== null ? (
        <>
          <p>
            % who chose one of selected responses: {(100.0 * value).toFixed(1)}
          </p>
          <p># who chose one of selected responses: {count}</p>
        </>
      ) : null}
      <p>Total Responses: {population}</p>
    </div>
  );
};

export const NorthAmericaChart = ({
  question,
  responses,
}: {
  question: string;
  responses: string[];
}) => {
  const data = useData();
  const { values, maxValue } = getQuestionData(data, question, responses);
  const colorScale = scaleLinear([0, maxValue], ["white", "purple"]);
  const [content, setContent] = useState<ReactNode>(<></>);

  return (
    <div>
      <ComposableMap
        projection="geoAzimuthalEquidistant"
        projectionConfig={{
          scale: 400,
          rotate: [100, -53, 0],
          center: [20, -10],
        }}
      >
        <Geographies geography={usCanadaGeo}>
          {({ geographies, outline, borders }: any) => {
            return geographies.map((geo: any, ii: number) => {
              const value = values[geo.properties.name] || {
                rate: null,
                population: 0,
              };
              return (
                <a data-tooltip-id="geo-tooltip" key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    fill={colorScale(
                      question === "response_rate"
                        ? value.population ?? 0
                        : value.rate ?? 0
                    )}
                    stroke="black"
                    onMouseEnter={() => {
                      console.log(geo.properties.name);
                      setContent(
                        makeTooltip(
                          geo.properties.name,
                          value.rate,
                          value.count,
                          value.population
                        )
                      );
                    }}
                  />
                </a>
              );
            });
          }}
        </Geographies>
      </ComposableMap>
      <Tooltip id="geo-tooltip">{content}</Tooltip>
    </div>
  );
};
