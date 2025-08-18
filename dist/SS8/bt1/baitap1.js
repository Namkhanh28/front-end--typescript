var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "Monday";
    weekDays["Tuesday"] = "Tuesday";
    weekDays["Wednesday"] = "Wednesday";
    weekDays["Thursday"] = "Thursday";
    weekDays["Friday"] = "Friday";
    weekDays["Saturday"] = "Saturday";
    weekDays["Sunday"] = "Sunday";
})(weekDays || (weekDays = {}));
for (let day of Object.keys(weekDays)) {
    console.log(`${day} : ${weekDays[day]}`);
}
export {};
//# sourceMappingURL=baitap1.js.map