var url =
  "https://65041988c8869921ae248078.mockapi.io/TestApi/api/v1/users/user";

// var xhr = new XMLHttpRequest();
// xhr.open("GET", url, true);
// xhr.onload = function () {
//   var users = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "200") {
//     console.table(users);
//   } else {
//     console.error(users);
//   }
// };
// xhr.send(null);

// var xhr = new XMLHttpRequest();
// xhr.open("GET", url + "/1", true);
// xhr.onload = function () {
//   var users = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "200") {
//     console.table(users);
//   } else {
//     console.error(users);
//   }
// };
// xhr.send(null);

// var data = {}; //data.firstname = "John"; //data.lastname = "Snow";
// var json = JSON.stringify(data);
// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
// xhr.onload = function () {
//   var users = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "201") {
//     console.table(users);
//   } else {
//     console.error(users);
//   }
// };
// xhr.send(json);

// var data = {};
// data.firstname = "John2";
// data.lastname = "Snow2";
// var json = JSON.stringify(data);
// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url + "/12", true);
// xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
// xhr.onload = function () {
//   var users = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "200") {
//     console.table(users);
//   } else {
//     console.error(users);
//   }
// };
// xhr.send(json);

var xhr = new XMLHttpRequest();
xhr.open("DELETE", url + "/12", true);
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(null);
