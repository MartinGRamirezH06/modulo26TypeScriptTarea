var ageCalculator = function (userDate) {
    //Capturando datos del usuario
    var stringADateUser = new Date(userDate);
    var yearUser = stringADateUser.getFullYear();
    //Estoy acomodando los meses para que se vean del 1 al 12
    var monthUser = stringADateUser.getUTCMonth() + 1;
    var dayUser = stringADateUser.getUTCDate();
    var stringDateMachine = new Date();
    var yearMachine = stringDateMachine.getFullYear();
    var monthMachine = stringDateMachine.getUTCMonth() + 1;
    var dayMachine = stringDateMachine.getUTCDate();
    var restaAños = yearMachine - yearUser;
    if (monthMachine < monthUser || monthMachine === monthUser && dayUser < dayMachine) {
        restaAños = restaAños - 1;
    }
    return restaAños;
};
console.log("Tu edad es:" + ageCalculator("1998-04-16"));
console.log("Tu edad es:" + ageCalculator("2004-06-08"));
console.log("Tu edad es:" + ageCalculator("2002-01-25"));
