export const wait = (delay: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, delay || 150));
};
