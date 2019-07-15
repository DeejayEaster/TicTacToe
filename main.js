$(document).ready(function() {
  var moves = 0;
  var player = "";
  var cpu = "";
  var currentPlayer = "";
  var count = 0;

  function checkForWin() {
    if (
      $("#1").html() === currentPlayer &&
      $("#2").html() === currentPlayer &&
      $("#3").html() === currentPlayer
    ) {
      $("#message1").html(currentPlayer + " WINS!");
      setTimeout(reset, 2000);
    } else if (
      $("#4").html() === currentPlayer &&
      $("#5").html() === currentPlayer &&
      $("#6").html() === currentPlayer
    ) {
      $("#message1").html(currentPlayer + " WINS!");
      setTimeout(reset, 2000);
    } else if (
      $("#7").html() === currentPlayer &&
      $("#8").html() === currentPlayer &&
      $("#9").html() === currentPlayer
    ) {
      $("#message1").html(currentPlayer + " WINS!");
      setTimeout(reset, 2000);
    } else if (
      $("#1").html() === currentPlayer &&
      $("#4").html() === currentPlayer &&
      $("#7").html() === currentPlayer
    ) {
      $("#message1").html(currentPlayer + " WINS!");
      setTimeout(reset, 2000);
    } else if (
      $("#2").html() === currentPlayer &&
      $("#5").html() === currentPlayer &&
      $("#8").html() === currentPlayer
    ) {
      $("#message1").html(currentPlayer + " WINS!");
      setTimeout(reset, 2000);
    } else if (
      $("#3").html() === currentPlayer &&
      $("#6").html() === currentPlayer &&
      $("#9").html() === currentPlayer
    ) {
      $("#message1").html(currentPlayer + " WINS!");
      setTimeout(reset, 2000);
    } else if (
      $("#1").html() === currentPlayer &&
      $("#5").html() === currentPlayer &&
      $("#9").html() === currentPlayer
    ) {
      $("#message1").html(currentPlayer + " WINS!");
      setTimeout(reset, 2000);
    } else if (
      $("#3").html() === currentPlayer &&
      $("#5").html() === currentPlayer &&
      $("#7").html() === currentPlayer
    ) {
      $("#message1").html(currentPlayer + " WINS!");
      setTimeout(reset, 2000);
    } else {
      draw();
    }
  }

  function cpuAi() {
    count += 1;
    if ($("#1").html() != cpu && $("#1").html() != player) {
      $("#1").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    } else if ($("#2").html() != cpu && $("#2").html() != player) {
      $("#2").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    } else if ($("#3").html() != cpu && $("#3").html() != player) {
      $("#3").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    } else if ($("#4").html() != cpu && $("#4").html() != player) {
      $("#4").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    } else if ($("#5").html() != cpu && $("#5").html() != player) {
      $("#5").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    } else if ($("#6").html() != cpu && $("#6").html() != player) {
      $("#6").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    } else if ($("#7").html() != cpu && $("#7").html() != player) {
      $("#7").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    } else if ($("#8").html() != cpu && $("#8").html() != player) {
      $("#8").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    } else if ($("#9").html() != cpu && $("#9").html() != player) {
      $("#9").html(cpu);
      currentPlayer = cpu;
      checkForWin();
      moves--;
    }
  }

  function reset() {
    $("#xButton").show();
    $("#oButton").show();
    $("#oButton").attr("disabled", false);
    $("#xButton").attr("disabled", false);
    $(".squares").html("");
    $("#message").html("Choose X or O:");
    $("#message1").html("");
    player = "";
    cpu = "";
    currentPlayer = "";
    moves = 0;
    count = 0;
  }

  function draw() {
    if (count === 9) {
      $("#message1").html("DRAW!");
      setTimeout(reset, 3000);
    }
  }

  $(".squares").click(function() {
    if (moves === 0) {
      $(this).html(player);
      count += 1;
      currentPlayer = player;
      checkForWin();
      moves++;
      cpuAi();
      console.log(count);
    }
  });

  $("#xButton").on("click", function() {
    cpu = "O";
    player = "X";
    $("#message").html("You are " + player);
    $("#oButton").hide();
    $(this).attr("disabled", true);
  });

  $("#oButton").on("click", function() {
    player = "O";
    cpu = "X";
    $("#message").html("You are " + player);
    $("#xButton").hide();
    $(this).attr("disabled", true);
    cpuAi();
    moves = 0;
  });
});
