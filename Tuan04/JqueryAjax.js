const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
// (function () {
//     $.ajax({
//         url: urlBacon,
//         method: "GET",
//         dataType: "json"
//     })
//         .done(function (data) {
//             console.log(data);
//         })
//         .fail(function (){
//             console.log("Error");
//         })
// })();

(function () {
  $.ajax({
    url: urlBacon,
    beforeSend: function (xhr) {
      xhr.overrideMimeType("text/plain; charset=x-user-defined");
    },
  }).done(function (data) {
    if (console && console.log) {
      console.log("Sample of data:", data.slice(0, 100));
    }
  });
})();
