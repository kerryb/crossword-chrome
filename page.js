function setupPage() {
  $("#box").siblings().hide();
  $(".discussion, .crossword-spoiler, .discussion-pagination").hide();
  $("#box").after('<div id="chat"><h1>Chat</h1></div>');
}
