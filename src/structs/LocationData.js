/**
 * an object to represent data over the user's inputs for a location
 * @param nameInp
 * @param latitudeInp
 * @param longitudeInp
 * @returns {{latitude, name, longitude}}
 * @constructor
 */

export const LocationData = function (nameInp, latitudeInp, longitudeInp) {
    const name = nameInp;
    const latitude = latitudeInp;
    const longitude = longitudeInp;
    return {name, latitude, longitude};
};
