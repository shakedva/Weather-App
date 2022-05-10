/**
 * an object to represent data of a forecast in a certain date
 * @param dateInp
 * @param weatherInp
 * @param minInp
 * @param maxInp
 * @param windInp
 * @returns {{date, min, max, weather, wind}}
 */
export const ForecastData = function (dateInp, weatherInp, minInp, maxInp, windInp) {
    const date = dateInp;
    const weather = weatherInp;
    const min = minInp;
    const max = maxInp;
    const wind = windInp;
    return {date, weather, min, max, wind};
};
