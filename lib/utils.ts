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
