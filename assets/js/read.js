
const readData = function () {
    const existingData = localStorage.getItem("dataArray");
    const parsedData = JSON.parse(existingData);
    return parsedData || [];
  }
  