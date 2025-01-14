import HasReady from "../HasReady";
import { ReadyInfo } from "../HasReadyStyles";
import * as Svg from "../../../atoms/icon/index";

const ReadyGroup = () => {
  return (
    <HasReady>
      <Svg.Lock />
      <ReadyInfo>9월 오픈 예정입니다.</ReadyInfo>
    </HasReady>
  );
};

export default ReadyGroup;
