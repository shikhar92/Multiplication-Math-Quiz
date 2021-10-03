p1n=localStorage.getItem("p1_name");
p2n=localStorage.getItem("p2_name");
p1s=0;
p2s=0;

document.getElementById("player1_name").innerHTML=p1n+" : ";
document.getElementById("player2_name").innerHTML=p2n+" : ";

document.getElementById("player1_score").innerHTML=p1s;
document.getElementById("player2_score").innerHTML=p2s;

document.getElementById("player_ques").innerHTML="Question Turn : "+p1n;
document.getElementById("player_ans").innerHTML="Answer Turn : "+p2n;

function send(){
n1=document.getElementById("num_1").value;
n2=document.getElementById("num_2").value;

actual_ans= parseInt(n1) * parseInt(n2);

question="<h4>"+n1+" X "+n2+"</h4>";

ibox="<br><br>Answer: <input type='number'id='box'>";

bt="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

total=question+ibox+bt;

document.getElementById("output").innerHTML=total;
document.getElementById("num_1").innerHTML="";
document.getElementById("num_2").innerHTML="";
}

questiont="player_1";
answert="player_2";

function check(){
getanswer=document.getElementById("box").value;

if(getanswer==actual_ans)
{
if(answert=="player_1")
{
p1s=p1s+1;
document.getElementById("player1_score").innerHTML=p1s;
}
else{
    p2s=p2s+1;
    document.getElementById("player2_score").innerHTML=p2s;
}

}
if(questiont=="player_1")
{
questiont="player_2";
document.getElementById("player_ques").innerHTML="Question Turn : "+p2n;
}
else
{
    questiont="player_1";
    document.getElementById("player_ques").innerHTML="Question Turn : "+p1n;
}
if(answert=="player_1")
{
answert="player_2"
document.getElementById("player_ans").innerHTML="Answer Turn : "+p2n;
}
else
{
    answert="player_1"
    document.getElementById("player_ans").innerHTML="Answer Turn : "+p1n;


}
document.getElementById("output").innerHTML="";
}
