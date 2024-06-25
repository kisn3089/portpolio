export const filesToUrl = (files: FileList) => URL.createObjectURL(files[0]);

// export const urlToImage = (url: string, callback: (result: string) => void) => {
export const urlToImage = (url: string, callback: (result: string) => void) => {
  const imageEl = new Image();
  imageEl.src = url;
  imageEl.onload = () => {
    const result = imageProcessing(imageEl);
    callback(result);
  };
};

const imageProcessing = (image: HTMLImageElement) => {
  const canvas = getCanvasFromImage(image);
  const dest_canvas = cloneCanvas(canvas);
  const imageData = dest_canvas.toDataURL("/image/png");

  return imageData;
  // document.body.appendChild(dest_canvas);
};

const cloneCanvas = (src_canvas: HTMLCanvasElement) => {
  const src_ctx = src_canvas.getContext("2d");
  const src_image_data = src_ctx?.getImageData(
    0,
    0,
    src_canvas.width,
    src_canvas.height
  ) as ImageData;

  const dest_canvas = document.createElement("canvas");
  dest_canvas.width = src_canvas.width;
  dest_canvas.height = src_canvas.height;

  const dest_ctx = dest_canvas.getContext("2d");
  dest_ctx?.drawImage(src_canvas, 0, 0);

  const dest_image_data = dest_ctx?.getImageData(
    0,
    0,
    dest_canvas.width,
    dest_canvas.height
  ) as ImageData;

  for (let y = 0; y < src_canvas.height; y++) {
    for (let x = 0; x < src_canvas.width; x++) {
      const offset = getOffset(x, y, src_canvas.width);
      const r = src_image_data.data[offset];
      const g = src_image_data.data[offset + 1];
      const b = src_image_data.data[offset + 2];
      const grayscale = (r + g + b) / 3;

      dest_image_data.data[offset] = grayscale;
      dest_image_data.data[offset + 1] = grayscale;
      dest_image_data.data[offset + 2] = grayscale;
      dest_image_data.data[offset + 3] = src_image_data.data[offset + 3];
    }
  }

  dest_ctx?.putImageData(dest_image_data, 0, 0);
  return dest_canvas;
};

const getOffset = (x: number, y: number, w: number) => {
  return (y * w + x) * 4;
};

const getCanvasFromImage = (image: HTMLImageElement) => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  const ctx = canvas.getContext("2d");
  ctx?.drawImage(image, 0, 0);
  return canvas;
};
