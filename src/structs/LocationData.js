export const LocationData = function (nameInp, latitudeInp, longitudeInp) {
    const name = nameInp;
    const latitude = latitudeInp;
    const longitude = longitudeInp;
    return {name, latitude, longitude};
};

// const cardOne = LocationData("davis", 34,35);
//
// console.log(cardOne); // {rank: "3", suit: "H"}
// console.log(cardOne.name);
// console.log(cardOne.latitude);