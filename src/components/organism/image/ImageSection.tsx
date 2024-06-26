import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CompareImage from "./compareImage/CompareImage";
import Dashboard from "./dashboard/Dashboard";
import { useDrag } from "@/hooks/useDrag";

const ImageSection = () => {
  const { imageSrc, measureRef, getImage, ChangeMeasureValue, dropCallback } =
    useImage();
  const { isDragEnter, onDragOver, onDragLeave, onDrop } =
    useDrag(dropCallback);

  return (
    <SectionLayout
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <ImageUpload getImage={getImage} isDragEnter={isDragEnter} />
      <CompareImage imageSrc={imageSrc} />
      <Dashboard ref={measureRef} ChangeMeasureValue={ChangeMeasureValue} />
    </SectionLayout>
  );
};

export default ImageSection;
