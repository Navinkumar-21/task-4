const date = new Date();
console.log(date);


/*what is epooch time in js
epoch time is Unix style in milliseconds since 01/01/1971, which means it returns a long number in milliseconds*/

console.log("epoch: " + date.getTime())



const epochdate = new Date().getTime()
console.log("milliseconds have passed : " + epochdate)
//another method to calculate millisec

const currentDateAndTime = new Date(epochdate);
console.log(currentDateAndTime);

const dateString = new Date().toString();
console.log(dateString)


//7 
const currentdate = new Date();
console.log("date : " + currentdate.getDay() + "/" + currentdate.getMonth()
    + "/" + currentdate.getFullYear() + " time :  "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds());





var currentanddate = new Date();
var now_utc = Date.UTC(currentdate.getUTCFullYear(), currentdate.getUTCMonth(),
    currentdate.getUTCDate());

console.log(new Date(now_utc));
const isoStr1 = '2022-10-06';

const date1 = new Date(isoStr1);
console.log(date1);



const LocaleString = '2022-10-06';
console.log(LocaleString.toLocaleString());



const birthday = new Date(1980, 6, 31, 12, 30, 00);
console.log("full year : " + birthday.getFullYear());
console.log("Month : " + birthday.getMonth());
console.log("Date : " + birthday.getDate());
console.log("Day : " + birthday.getDay());
console.log("Hours : " + birthday.getHours());
console.log("minutes : " + birthday.getMinutes());
console.log("Seconds : " + birthday.getSeconds());
console.log("milliseconds : " + birthday.getMilliseconds());

function CompareDate() {

    var todaysDate = new Date(2022, 10, 06); //Year, Month, Date    
    var givenDate = new Date(2022, 10, 03); //Year, Month, Date    
    if (todaysDate == givenDate) {
        console.log("Todays Date is oct 3rd.");
    } else {
        console.log("Todays date is not oct 3rd ");
    }
}
CompareDate();

//form validation
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let messageblock = document.getElementById("messages");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    let message = [];
    if (username === "" || username === null) {
        message.push(`<p style  ="color:red">Username is required<p>`)
    }
    if (password === "" || password === null) {
        message.push(`<p style = "color:red">Password is required<p>`)
    }
    else if (password.length < 6) {
        message.push(`<p style  ="color:red">Password should have minimum of 6 characters<p>`)
    }
    if (message.length > 0) {
        messageblock.innerHTML = message.join(" ")
    } else {
        message.push(`<p style  "color:green">Successfully Logged in<p>`)
        messageblock.innerHTML = message[0]
    }
})

