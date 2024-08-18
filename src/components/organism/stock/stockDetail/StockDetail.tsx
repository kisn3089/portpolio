import { StockDetailContainer } from "./StockDetailStyle";
import CheckCondition from "@/lib/util/CheckCondition";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";
import DetailInfo from "./detailInfo/DetailInfo";
import { useContext } from "react";
import { StockListContext } from "../stockInfo/StockInfo";

const StockDetail = () => {
  const { listStockList, detailId } = useContext(StockListContext);
  const detailStock = Array.isArray(listStockList)
    ? listStockList.find((stock) => stock.srtnCd === detailId)
    : null;
  console.log("detailStock: ", detailStock);

  return (
    <StockDetailContainer>
      <CheckCondition falseCondition={!detailStock}>
        <BeforeFetch
          content="주식 및 배당 정보입니다."
          svg={<Svg.StockList />}
        />
        <DetailInfo detailStock={detailStock} />
      </CheckCondition>
    </StockDetailContainer>
  );
};

export default StockDetail;
