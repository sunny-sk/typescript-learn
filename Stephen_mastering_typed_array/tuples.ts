const drink = {
  color: 'brown',
  carbonated: true,
  suger: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

// where to use it
// if we are working with csv files then we can react out to tuples let's say  we have row and in each coloumn we can store psecific type of data
const [color, check, number] = pepsi;

console.log(color);
