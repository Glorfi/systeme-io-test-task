export const getStringKeys = (obj: Record<string, any>) => {
  const arr: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const date = new Date(value);
    if (typeof value === 'string' && isNaN(date.getTime())) {
      arr.push(key);
    }
  }
  return arr;
};
