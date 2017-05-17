var dates = document.querySelectorAll('li span');

for (var i = 0; i < dates.length; i++) {
  var dateParts = dates[i].innerText.split('/');
  var myDate = new Date(dateParts[2], dateParts[0]-1, dateParts[1]);
  var diff = Math.abs(new Date() - myDate);
  var daysUntil = Math.floor(diff / (1000*60*60*24));

  var p = document.createElement("p");
  dates[i].innerHTML = daysUntil;
}