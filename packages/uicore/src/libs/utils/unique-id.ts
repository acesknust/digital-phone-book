export const uniqueId = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substring(2);
  const date = Date.now();
  return date + head + tail;
};
