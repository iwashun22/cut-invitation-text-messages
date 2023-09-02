// let test = "Time: Sep 5, 2023 09:15 AM Bangkok";

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
  const dateArray = dateStr.split(" ");
  const monthName = dateArray.splice(1, 1)[0];
  const dateNum = dateArray.splice(1, 1)[0].replace(",", "");

  const monthNameInThai = months[monthName];
  // console.log(monthName, monthNameInThai);
  // console.log(dateArray);

  const date = dateNum + " " + monthNameInThai;
  console.log(date);

  // remove year and change it to month and day
  dateArray[1] = date;

  // convert time
  if(dateArray[3] === "PM") {
    let [hour, minute] = dateArray[2].split(":");
    hour = Number(hour);
    hour = hour < 12 ? (hour + 12) : hour;
    
    dateArray[2] = `${hour}:${minute}`;
  }
  dateArray[3] = "น."

  console.log(dateArray);
  dateArray.pop();
  let dateToString = dateArray.toString().replaceAll(",", " ");
  return dateToString;
}

module.exports = convertDateToThai;