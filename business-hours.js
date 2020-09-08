// Open up a text editor of your choice and complete the following Javascript exercises.
// Exercise #1

// We'll build the industry plant calendar from the opening exercise.
// Part 1

// First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

// By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

// function businessHours(dayNumber, hourNumber)

// Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).

// Method 1
// function businessHours(dayNumber, hourNumber) {
//     if (dayNumber <= 5 && hourNumber >= 9 && hourNumber <= 17) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
//   businessHours(4, 12);
// Method 2
function businessHours(dayNumber, hourNumber) {
    var isBusinessHours = hourNumber >= 9 && hourNumber <= 18;
    var isWorkDay = dayNumber < 5;
    return isBusinessHours && isWorkDay;
}
// businessHours(5, 10);

// Part 2

// Now, create the function getDayNumber.

// It should accept two parameters: janFirstDayNumber and yearDayNumber.

// The yearDayNumber will be an int ranging from 0 to 365.

// janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

// Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

// Hint: use the remainder operator (%), dividing your yearDayNumber by 7.
function getDayNumber(janFirstDayNumber, yearDayNumber){
    // 0-365
    // 14 % 7 => 0
    // 13 % 7 => 6
    // 1 + 14 % 7 => 0 + 1 => 1
    // 2 + 14 % 7 => 0 + 2 => 2
    // 3 + 14 % 7 => 0 + 3 => 3
    var dayNumber = (janFirstDayNumber + yearDayNumber) % 7;

    return dayNumber;
}
// Part 3

// Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.
function isBusinessHoursOnDay(yearDayNumber, HourNumber) {
    var dayNumber = getDayNumber(0, yearDayNumber);
    var isBusinessHours = businessHours(dayNumber, HourNumber);

    return isBusinessHours;
}