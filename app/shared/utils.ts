export const getNumbers = (str: string): number => {
  return parseInt(str.replace(/\D/g, ''));
};
