var _this = this;
var oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary: function () {
    console.log(_this);
  },
};
var printVehicle = function (vehicle) {
  console.log('Name : ' + vehicle.name);
  console.log('Year : ' + vehicle.year);
  console.log('Broken : ' + vehicle.broken);
};
// printVehicle(oldCivic);
oldCivic.summary();
