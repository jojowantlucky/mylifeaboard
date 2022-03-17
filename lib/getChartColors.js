const randomColorGenerator = () => {
  const r = Math.floor(Math.random() * 175) + 100;
  const g = Math.floor(Math.random() * 150) + 100;
  const b = Math.floor(Math.random() * 175) + 100;

  const background = `rgba(${r}, ${g}, ${b}, 0.5)`;
  const border = `rgba(${r}, ${g}, ${b}, 1)`;

  return [background, border];
};

const getChartColors = (quantity) => {
  const backgroundColor = [];
  const borderColor = [];

  for (let i = 0; i < quantity; i++) {
    const colors = randomColorGenerator();
    backgroundColor.push(colors[0]);
    borderColor.push(colors[1]);
  }
  return [backgroundColor, borderColor];
};

export default getChartColors;
