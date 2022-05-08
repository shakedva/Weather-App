export const ForecastData = function (dateInp, weatherInp, minInp, maxInp, windInp) {
    const date = dateInp;
    const weather = weatherInp;
    const min = minInp;
    const max = maxInp;
    const wind = windInp;
    return [date, weather, min, max, wind];
};
