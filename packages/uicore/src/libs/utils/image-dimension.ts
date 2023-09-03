export const ImageDimensions = async (file:File) => {
  const newPromise = new Promise((resolve) => {
    const img = new Image();
    img.src = window.URL.createObjectURL(file);
    img.onload = () => {
      resolve(img);

    };
  });

  return newPromise as Promise<HTMLImageElement>;
};
