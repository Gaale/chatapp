$(function () {
  setInterval(function () {
    $(".info__time").text(spawnTime());
  }, 1000);

  const greetings = [
    "Hello!",
    "Hi",
    "Long time no see!",
    "Hello! How are You?",
  ];

  const allAnswers = [
    "Wow!",
    "Super",
    "And what?",
    "OMG",
    "Are you sure?",
    "Very well",
  ];

  function answer(text) {
    setTimeout(function () {
      if ($(".incoming").length === 0) {
        $("<div>")
          .addClass("message__date")
          .text(spawnDate())
          .appendTo(".main");
      }
      $("<div>").addClass("incoming").text(text).appendTo(".main");
      $("<span>")
        .addClass("message__time")
        .text(spawnTime())
        .appendTo(".incoming");
      $(".wrapper").scrollTop(999);
    }, 2000);
  }

  function spawnTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }
  function spawnDate() {
    return new Date().toLocaleDateString();
  }

  answer(greetings[Math.floor(Math.random() * greetings.length)]);

  $("body").on("mousemove", function () {
    $(".contacts__available").css("color", "chartreuse");
  });

  $("#formMessage").on("submit", function (event) {
    event.preventDefault();

    if($("#message").val() !== ''){
       let message = $("#message").val();
    $("<div>").addClass("outgoing").text(message).appendTo(".main");
    $("#message").val("");
    $("<span>")
      .addClass("message__time")
      .text(spawnTime())
      .appendTo(".outgoing");

    $(".wrapper").scrollTop(9999);

    setTimeout(function () {
      answer(allAnswers[Math.floor(Math.random() * allAnswers.length)]);
    }, Math.floor(Math.random() * 7) * 1000);
    }
  });
});
