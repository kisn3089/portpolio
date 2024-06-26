import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CompareImage from "./compareImage/CompareImage";
import Dashboard from "./dashboard/Dashboard";
import { useDrag } from "@/hooks/useDrag";

const ImageSection = () => {
  const {
    imageSrc,
    confRef,
    getImage,
    onChangeConf,
    dropCallback,
    onCreate,
    onDownload,
  } = useImage();
  const { isDragEnter, onDragOver, onDragLeave, onDrop } =
    useDrag(dropCallback);

  return (
    <SectionLayout
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}>
      <ImageUpload getImage={getImage} isDragEnter={isDragEnter} />
      <CompareImage imageSrc={imageSrc} />
      <Dashboard
        ref={confRef}
        onChangeConf={onChangeConf}
        onCreate={onCreate}
        onDownload={onDownload}
      />
    </SectionLayout>
  );
};

export default ImageSection;
