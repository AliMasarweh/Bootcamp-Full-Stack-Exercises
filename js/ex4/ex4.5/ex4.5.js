function isLeapYear(year) {
    let leapYear = "It is indeed a leap year",
        notLearpYear = "This is not a leap year";
    if(year % 4 !== 0) {
        return notLearpYear;
    }
    if(year % 100 !== 0)
        return leapYear;
    else if(year % 400) {
        return leapYear;
    }

    return notLearpYear;
}
