function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);

  const averageMileage = totalMileage / cars.length;

  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );
  // Get the car with the lowest mileage by comparing the mileage of each car to the lowest mileage so far
  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    totalMileage,
    highestMileageCar,
    lowestMileageCar,
  };
}

module.exports = analyzeCarMileage;
