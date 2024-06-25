import { useImage } from "@/hooks/useImage";
import {
  BorderCenter,
  EditImage,
  ImageLayout,
  ImageWrapper,
  InsideContent,
  InsideUpload,
  LabelImage,
  SampleLayout,
  TempLayout,
  UploadContainer,
  UploadLayout,
} from "./ImageLayoutStyles";
import * as Svg from "@/components/atoms/icon/index";

const ImageSection = () => {
  const { image, getImage, onChangeType } = useImage();

  // 변환된 이미지를 contain, cover 둘 다 볼 수 있게 radio 버튼 추가 (default: cover)

  return (
    <ImageLayout>
      <UploadLayout>
        <UploadContainer>
          <BorderCenter />
          <LabelImage htmlFor="image" />
          <input
            type="file"
            id="image"
            accept=".jpg, .png, .ico, .webp"
            onChange={getImage}
          />
          <InsideUpload>
            <Svg.UploadImage />
            <InsideContent>Drag Down or Click</InsideContent>
          </InsideUpload>
        </UploadContainer>
      </UploadLayout>
      <SampleLayout>
        <ImageWrapper>
          <EditImage
            src="/assets/img/opera.webp"
            alt="image_color_custom"
            $type={image.fitType}
          />
        </ImageWrapper>
        <ImageWrapper>
          <EditImage
            src={image.image || "/assets/img/opera.webp"}
            alt="image_color_custom"
            $type={image.fitType}
          />
        </ImageWrapper>
      </SampleLayout>
      <TempLayout>
        <label htmlFor="cover">Cover</label>
        <input
          type="radio"
          id="cover"
          value={"cover"}
          checked={image.fitType === "cover"}
          onChange={onChangeType}
        />
        <label htmlFor="contain">contain</label>
        <input
          type="radio"
          id="contain"
          value={"contain"}
          checked={image.fitType === "contain"}
          onChange={onChangeType}
        />
      </TempLayout>
    </ImageLayout>
  );
};

export default ImageSection;
