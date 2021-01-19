export const dateStringToDate = (date: string): Date => {
  const dateParts = date.split('/').map((e: string): number => +e);
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
