/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

// Definir el enum Season
enum Season {
    Fall = "Fall",
    Winter = "Winter",
    Spring = "Spring",
    Summer = "Summer"
}

// Actualizar la función para aceptar el enum
function whichMonths(season: Season): string {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
            break;
    }
    return monthsInSeason;
}

// Usar el enum en la llamada a la función
console.log(whichMonths(Season.Fall)); // Resultado: "September to November"