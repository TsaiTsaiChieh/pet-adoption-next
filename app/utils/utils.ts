export const textClearUp = (str: string): string => {
  return str.replaceAll(" ", "");
};

export const calcDaysSince = (dateString: string): number => {
  const timeDiff = new Date().getTime() - new Date(dateString).getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24));
};
