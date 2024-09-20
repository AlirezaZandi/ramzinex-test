export const deepCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(item => deepCamelCase(item));
  }
  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const camelCaseKey = key.replace(/([-_][a-z])/gi, $1 =>
        $1.toUpperCase().replace("-", "").replace("_", "")
      );

      return { ...acc, [camelCaseKey]: deepCamelCase(obj[key]) };
    }, {});
  }
  return obj;
};
