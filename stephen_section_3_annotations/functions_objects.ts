// function
const logNUmber: (i: number) => void = (i) => {
  console.log(i);
};

// method 1
const addNumber: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2;
};
// method 2
const subtractNumber = (num1: number, num2: number): number => {
  return num1 + num2;
};

function devide(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  weather,
  date,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
