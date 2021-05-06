var player_1 = localStorage.getItem("player1");
var player_2 = localStorage.getItem("player2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1").innerHTML = player_1 + " : ";
document.getElementById("player2").innerHTML = player_2 + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_q").innerHTML = "Question turn: " + player_1;
document.getElementById("player_a").innerHTML = "Answer turn: " + player_2;

function enter(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    question_word = "<h4 id='word_display'>Q. " + num1 + " x " + num2 +"</h4>";
    answer = "<br>Answer: <input class='form-control' type='text' placeholder='Enter the answer'><br><br>";
    answer_button = "<button class='btn btn-info' onclick='check()'>Check</button>";
    col = question_word + answer + answer_button;
    document.getElementById("output").innerHTML = col;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";