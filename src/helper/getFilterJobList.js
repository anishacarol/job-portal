export const getFilterJobList = (arr, query) => {
  const filteredData = arr.filter(item => {
    for (let key in query) {
      if (item[key] === undefined || !query[key].includes(item[key])) {
        return false;
      }
    }
    return true;
  });
  return filteredData;
};
