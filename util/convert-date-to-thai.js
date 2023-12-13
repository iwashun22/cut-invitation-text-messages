
const months = {
  ["Jan"]: "ม.ค.",
  ["Feb"]: "ก.พ.",
  ["Mar"]: "มี.ค.",
  ["Apr"]: "เม.ย.",
  ["May"]: "พ.ค.",
  ["Jun"]: "มิ.ย.",
  ["Jul"]: "ก.ค.",
  ["Aug"]: "ส.ค.",
  ["Sep"]: "ก.ย.",
  ["Oct"]: "ต.ค.",
  ["Nov"]: "พ.ย.",
  ["Dec"]: "ธ.ค."
}

function convertDateToThai(dateStr) {
  // example dateStr
  // Time: Dec 12, 2022 10:00 PM Bangkok
  const dateArray = dateStr.split(" ");
  // ["Time:", "Dec", "12,", "2022", "10:00", "PM", "Bangkok"]
  const monthName = dateArray.splice(1, 1)[0];
  const dateNum = dateArray.splice(1, 1)[0].replace(",", "");

  const monthNameInThai = months[monthName];
  // console.log(monthName, monthNameInThai);
  // console.log(dateArray);

  const date = dateNum + " " + monthNameInThai;
  // console.log(date);

  // remove year and change it to month and day
  dateArray[1] = date;

  // convert time
  if(dateArray[3] === "PM") {
    let [hour, minute] = dateArray[2].split(":");
    hour = Number(hour);
    hour = hour <= 12 ? (hour + 12) : hour;
    hour = hour === 24 ? '00' : hour;
    
    dateArray[2] = `${hour}:${minute}`;
  }
  dateArray[3] = "น."

  // console.log(dateArray);
  dateArray.pop();
  let dateToString = dateArray.toString().replaceAll(",", " ");
  return dateToString;
}

const matchMonth = v => Object.keys(months).includes(v);
const matchTime = v => v.match(/([0-9]{2}:[0-9]{2})/);

function convertDateByRegExr(dateStr) {
  // Time: Dec 12, 2022 10:00 PM Bangkok
  const dateArray = dateStr.split(" ").map(v => v.replaceAll(",", ""));
  const month = dateArray.find(matchMonth);
  const day = dateArray[dateArray.findIndex(matchMonth) + 1];

  const time = dateArray.find(matchTime);
  const suffix = dateArray[dateArray.findIndex(matchTime) + 1];
  if(suffix.match(/AM|am|PM|pm/).length <= 0) return;

  const [hour, minute] = time.split(":").map(v => parseInt(v));
  const twentyFourHourTime = (hour < 12 && suffix.match(/PM/i)) ? hour + 12 : hour;
  const formattedTime = formattingTime(twentyFourHourTime, minute);
  
  const formatted = [];
  formatted.push("Time:", day, months[month], formattedTime);
  return formatted.join(" ");
}

function formattingTime(hour, minute) {
  if(hour == 24 ) { hour = 0; }
  if(hour > 24 || minute > 60) throw new Error("Time should be in an hour and a minute")

  hour = hour.toString();
  hour = hour.length === 1 ? "0" + hour : hour;

  minute = minute.toString();
  minute = minute.length === 1 ? "0" + minute : minute;

  return `${hour}:${minute} น.`
}

module.exports = {
  convertDateToThai,
  convertDateByRegExr,
};