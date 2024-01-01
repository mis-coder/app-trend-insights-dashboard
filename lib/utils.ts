export const generateRandomColors = (totalColors: number) => {
  const colors = [];

  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  for (let i = 0; i < totalColors; i++) {
    const randomColor = getRandomColor();
    colors.push(randomColor);
  }

  return colors;
};

export const formatBigNumber = (num: number, precision = 2) => {
  const suffixMap = [
    { suffix: "Q", threshold: 1e15 },
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const desiredValue = suffixMap.find(
    (item) => Math.abs(num) >= item.threshold
  );

  if (desiredValue) {
    const formattedNum =
      (num / desiredValue.threshold).toFixed(precision) + desiredValue.suffix;
    return formattedNum;
  }

  return num;
};

