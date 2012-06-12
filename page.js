function setupPage() {
  $("#box").siblings().hide();
  $(".discussion, .crossword-spoiler, .discussion-pagination").hide();
  $("#box").after('<div id="chat"></div>');
  $("#chat").load("http://cruciverbalist.herokuapp.com/");
}
