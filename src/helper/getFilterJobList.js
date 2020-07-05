export const getFilterJobList = (arr, query) => {
  const filteredData = arr.filter(item => {
    for (let key in query) {
      if (query[key] !== item[key]) {
        return false;
      }
    }
    return true;
  });
  return filteredData;
};
