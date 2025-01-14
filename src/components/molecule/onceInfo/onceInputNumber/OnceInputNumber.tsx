import { QuestionInfo } from "../questionInfo/QuestionInfo";
import {
  CenterLine,
  ClearButton,
  InfoContent,
  InfoLayout,
  ShortcutWrapper,
  ThresholdInfoWrapper,
} from "./OnceInputNumberStyles";
import { useStorage } from "@/hooks/useStorage";

const OnceInputNumber = () => {
  const STORAGE_KEY = "image";
  const { isFirst, onSetStorage, onDeleteStorage } = useStorage(STORAGE_KEY);
  if (isFirst)
    return (
      <QuestionInfo
        storageKey={STORAGE_KEY}
        style={["2%", "2%"]}
        onDeleteStorage={onDeleteStorage}
      />
    );

  return (
    <InfoLayout>
      <ThresholdInfoWrapper>
        <InfoContent>Threshold [default]: 0</InfoContent>
        <InfoContent className="ko">
          값이 낮을수록 흑백에 가까워집니다.
        </InfoContent>
      </ThresholdInfoWrapper>
      <CenterLine />
      <ShortcutWrapper>
        <InfoContent>Enter: Create Image</InfoContent>
        <InfoContent>⌘ + Enter: Image Download</InfoContent>
        <ClearButton onClick={() => onSetStorage(STORAGE_KEY)}>
          check
        </ClearButton>
      </ShortcutWrapper>
    </InfoLayout>
  );
};

export default OnceInputNumber;
