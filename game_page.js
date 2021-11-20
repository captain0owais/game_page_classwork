var p1_name=localStorage.getItem("Player 1");
var p2_name=localStorage.getItem("Player 2");
var p1_score=3;
var p2_score=2;
document.getElementById("player1_name").innerHTML=p1_name + " : ";
document.getElementById("player2_name").innerHTML=p2_name + " : ";
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;
document.getElementById("player_Q").innerHTML="Question turn -" + p1_name;
document.getElementById("player_A").innerHTML="Answer turn -" + p2_name;

function send(){
    var get_word=document.getElementById("word").value;
    var word=get_word.toLowerCase();
    console.log("word in lower case = " + word);

    var charAt1=word.charAt(1);
    console.log(charAt1);

    var length_by_2=Math.floor(word.length/2);

    var charAt2=word.charAt(length_by_2);
    console.log(charAt2);

    var length_minus_1=word.length-1;

    var charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    var remove_charAt1=word.replace(charAt1,"_");
    var remove_charAt2=remove_charAt1.replace(charAt2,"_");
    var remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    var question_word="<h4 id='word_display'>Q." + remove_charAt3 + "</h4>";
    var input_box="<br><br>Answer: &nbsp; &nbsp; <input type='text' id='check_box' placeholder='Type Answer'>";
    var check_button="<br><br><button class='btn btn-info' onClick='check()'>Check</button>";
    var row=question_word + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

var question_turn=p1_name;
var answer_turn=p2_name;

function check(){
   var get_answer=document.getElementById("check_box").value;
   var answer=get_answer.toLowerCase();
   console.log("answer in lower case =" + answer);

   if(answer == word){
       if(answer_turn == p1_name){
           p1_score=p1_score + 1;
           document.getElementById("player1_score").innerHTML=p1_score;
       }else{
           p2_score=p2_score + 1;
           document.getElementById("player2_score").innerHTML=p2_score;
       }
   }

   if(question_turn == p1_name){
       question_turn=p2_name;
       document.getElementById("player_Q").innerHTML="Question turn -" + p2_name;
   }else{
    question_turn=p1_name;
    document.getElementById("player_Q").innerHTML="Question turn -" + p1_name;
    }

    if(answer_turn == p1_name){
        answer_turn=p2_name;
        document.getElementById("player_A").innerHTML="Answer turn -" + p2_name;
    }else{
        answer_turn=p1_name;
        document.getElementById("player_A").innerHTML="Answer turn -" + p1_name;
     }

     document.getElementById("output").innerHTML="";
}