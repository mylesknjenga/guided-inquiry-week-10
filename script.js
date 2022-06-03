// Create a function that takes two dates and returns the number of days between the first and second date.

const getDays = (date1, date2) => {

    //getTime() returns days in milliseconds
    const timeDifference = date2.getTime() - date1.getTime();
    
    //convert timeDifference from milliseconds to days
    return timeDifference / (1000 * 3600 * 24);
}

//TESTS
console.log(getDays(new Date("June 14, 2019"),new Date("June 20, 2019")));
console.log(getDays(new Date("December 29, 2018"),new Date("January 1, 2019")));
console.log(getDays(new Date("July 20, 2019"),new Date("July 30, 2019")));