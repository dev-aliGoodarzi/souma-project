export const createBodyOfRequestForUrlIncluded = (object: object) => {
  const urlencoded = new URLSearchParams();

  const keys = Object.keys(object);
  keys.forEach((item) => {
    urlencoded.append(item, object[item as keyof typeof object]);
  });

  return urlencoded;
};
