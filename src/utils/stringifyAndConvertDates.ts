export const stringifyAndConvertDates = (
  obj: Record<string, any>
): Record<string, any> => {
  const newObj: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      const date = new Date(value);
       if (!isNaN(date.getFullYear())) {
        newObj[key] = date.toLocaleDateString();
      } else {
        newObj[key] = value;
      }
    } else if (typeof value === 'object' && value !== null) {
      newObj[key] = Object.entries(value)
        .map(([subKey, subValue]) => `${subKey}: ${subValue}`)
        .join(', ');
    } else if (Array.isArray(obj[key])) {
      newObj[key] === obj[key].join(', ');
    } else {
      newObj[key] = value.toString();
    }
  }

  return newObj;
};
