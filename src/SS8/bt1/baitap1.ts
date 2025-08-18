enum weekDays{
    Monday = `Monday`,
    Tuesday= `Tuesday`,
    Wednesday= `Wednesday`,
    Thursday = `Thursday`,
    Friday = `Friday`,
    Saturday = `Saturday`,
    Sunday  = `Sunday`
}
for (let day of Object.keys(weekDays)) {
    console.log(`${day} : ${weekDays[day as keyof typeof weekDays]}`);
}