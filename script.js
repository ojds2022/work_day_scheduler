
$(function () {

  $(function() {  // functionality for the save button
    $(".saveBtn").on("click", function() {
      const timeBlockId = $(this).closest(".time-block").attr("id");
      const userInput = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, userInput);
    });
  });
  
  $(function() { // functionality for finding the current hour
    const currentHour = dayjs().hour();
    $(".time-block").each(function() {
      const hourId = parseInt($(this).attr("id").split("-")[1]);
      if (hourId < currentHour) { // if the hourId var is less than the currentHour var, add the 'past' class
        $(this).addClass("past");
      } else if (hourId === currentHour) { // if the hourId var is equal to the currentHour var, add the 'present' class
        $(this).addClass("present");
      } else { // otherwise, add the 'future' class
        $(this).addClass("future");
      }
    });
  });
  
  $(function() {
    $(".time-block").each(function() {
      const timeBlockId = $(this).attr("id");
      const userInput = localStorage.getItem(timeBlockId);
      $(this).find(".description").val(userInput);
    });
  });
  
  $(function() { // Displays the current day at the top of the calendar
    const currentDay = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDay);
  });  
});
