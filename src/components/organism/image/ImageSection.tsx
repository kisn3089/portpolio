import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CreateImage from "./createImage/CreateImage";
import Dashboard from "./dashboard/Dashboard";
import { useDrag } from "@/hooks/useDrag";

const ImageSection = () => {
  const { imageSrc, confRef, getImage, onChangeConf, dropCallback, onCreate } =
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
      <CreateImage imageSrc={imageSrc} />
      <Dashboard
        ref={confRef}
        createSrc={imageSrc.createSrc}
        onChangeConf={onChangeConf}
        onCreate={onCreate}
      />
    </SectionLayout>
  );
};

export default ImageSection;
