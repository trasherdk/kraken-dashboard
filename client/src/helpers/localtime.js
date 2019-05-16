const localTime = (unixtime, fullDate = true) => {
  var u = new Date(unixtime * 1000);
  let resultDate = "";
  if (fullDate) {
    resultDate =
      u.getUTCFullYear() +
      "/" +
      ("0" + u.getMonth()).slice(-2) +
      "/" +
      ("0" + u.getDate()).slice(-2) +
      " - " +
      ("0" + u.getHours()).slice(-2) +
      ":" +
      ("0" + u.getMinutes()).slice(-2) +
      ":" +
      ("0" + u.getSeconds()).slice(-2);
  } else {
    resultDate =
      ("0" + u.getHours()).slice(-2) +
      ":" +
      ("0" + u.getMinutes()).slice(-2) +
      ":" +
      ("0" + u.getSeconds()).slice(-2);
  }
  return resultDate;
};

export default localTime;
