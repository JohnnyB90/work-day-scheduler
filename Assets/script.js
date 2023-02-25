// Document ready function to keep things from rendering until page load
$(function () {
  // Load local storage on page load
  $(".description").each(function (){
    $(this).val(localStorage.getItem($(this).parent().attr("id")));
});
// Set interval to keep timer ticking every second.
setInterval(date,1000);
// Function to set the date and time
function date(){
$("#currentDay").text(dayjs().format("dddd MMMM DD, YYYY, hh:mm:ssA"));
}
// Variable to store the current hour at all times
var currentHour = dayjs().hour();
// A jquery for each loop to run through each item of the scheduler and compare the if statement on each.
$(".time-block").each( function() {
  var dataHour = parseInt($(this).data("hour"));
  console.log(dataHour)
// A checkpoint to see if it is present time
if (currentHour === dataHour){
  $(this).removeClass("future")
  $(this).removeClass("past")
  $(this).addClass("present");
}
// A checkpoint to see if it is future time
else if (currentHour < dataHour){
  $(this).removeClass("present")
  $(this).removeClass("past")
  $(this).addClass("future");
}
// A checkpoint to see if it is past time
else {
  $(this).removeClass("present")
  $(this).removeClass("future")
  $(this).addClass("past");
}
}
)
// Save button click handler to save to local storage
  $(".saveBtn").on("click", function(event) {
    var content = $(this).siblings("textarea").val();
    localStorage.setItem($(this).parent().attr("id"), content);
  });

});
