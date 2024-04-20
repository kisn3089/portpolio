import Loading from "@/components/molecule/loading/Loading";
import { SlideRight } from "../stockList/stockListBody/StockListBodyStyles";
import LineChart from "@/components/molecule/lineChart/LineChart";
import { StockDataTypes } from "@/types/stockData.type";
import CheckCondition from "@/lib/util/CheckCondition";
import NoData from "@/components/molecule/noData/NoData";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";

interface StockChartProps {
  getStockDetail?: StockDataTypes[];
  detailStock?: StockDataTypes;
  isFetching: boolean;
  bgColor?: string;
}

const StockChart = ({
  getStockDetail,
  detailStock,
  isFetching,
  bgColor,
}: StockChartProps) => {
  const stockData =
    getStockDetail
      ?.map((chartItem) => ({
        x: chartItem.basDt,
        y: chartItem.clpr,
      }))
      .reverse() || [];

  console.log("getStockDetail: ", getStockDetail);
  console.log("stockData: ", stockData);

  const onlyValue = stockData.map((item) => Number(item.y));
  const min = Math.min(...onlyValue);
  const max = Math.max(...onlyValue);
  const chartData = [{ id: "stock", data: stockData }];

  return (
    <>
      <Loading isLoading={isFetching} bgColor={bgColor} />
      <SlideRight $isLoading={isFetching}>
        <CheckCondition falseCondition={!detailStock?.itmsNm || false}>
          <BeforeFetch content="주식을 선택해주세요." svg={<Svg.StockIcon />} />
          <CheckCondition falseCondition={!stockData[1]}>
            <NoData content="제공되는 데이터가 없습니다." />
            <LineChart chartData={chartData} range={{ min: min, max: max }} />
          </CheckCondition>
        </CheckCondition>
      </SlideRight>
    </>
  );
};

export default StockChart;
