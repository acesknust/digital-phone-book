
// import { prominent } from "color.js";

export const ImageRename = async (imageFile: File) => {
  const newPromise = new Promise((resolve) => {
    const oldFile = new File([imageFile], imageFile.name, {});
    const newfile = new File([oldFile], `YokaApp-${Date.now()}.png`, {
      type: "image/jpg",
    });
    
    resolve(newfile) 
  });
  return newPromise as Promise<File>;
};
