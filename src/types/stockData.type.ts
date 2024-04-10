export interface StockDataTypes {
  // 기준일자
  basDt: string;
  // 종가
  clpr: string;
  // 등락률
  fltRt: string;
  // 고가
  hipr: string;
  // ISIN 코드
  isinCd: string;
  // 종목명
  itmsNm: string;
  // 저가
  lopr: string;
  // 상장주식수
  lstgStCnt: string;
  // 시가
  mkp: string;
  // 시장구분 -> KOSPI
  mrktCtg: string;
  // 시가총액
  mrktTotAmt: string;
  // 종목코드
  srtnCd: string;
  // 거래금액
  trPrc: string;
  // 거래량
  trqu: string;
  // 대비
  vs: string;
}
