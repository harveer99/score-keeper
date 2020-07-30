// alert("connected");
var button1 = document.querySelector("body button:nth-of-type(1)");
var button2 = document.querySelector("body button:nth-of-type(2)");
var button3 = document.querySelector("body button:nth-of-type(3)");
var p1scorehtml = document.querySelector("#score1");
var p2scorehtml = document.querySelector("#score2");
var comment =  document.querySelector("#comment");

console.log(p1scorehtml);
console.log(p2scorehtml);

var p1score = 0;
var p2score = 0;
var winningscore = 5;
var gameover = false;

function fun1(){
	if(p1score >= winningscore){
			comment.classList.remove("brown");
			comment.classList.add("win");
			comment.innerHTML="Player1 won"
		}
	else if(p2score >= winningscore){
			comment.classList.remove("brown");
			comment.classList.add("win");
			comment.innerHTML="Player2 won"
		}
	else if(p1score == p2score){
		comment.innerHTML="close Match"
	}
	else if(p1score > p2score){
		comment.classList.add("brown");
		comment.innerHTML="player1 is ahead"
	}
	else if(p2score > p1score){
		comment.classList.add("brown");
		comment.innerHTML="player2 is ahead"
	}
}

button1.addEventListener("click",function(){
	if(!gameover){
		++p1score;
		p1scorehtml.innerHTML=p1score;
		// console.log(p1score);
		fun1();
		if(p1score >= winningscore){
			gameover = true;
			p1scorehtml.classList.add("win");
		}
	}
})
button2.addEventListener("click",function(){
	if(!gameover){
		++p2score;
		p2scorehtml.innerHTML=p2score;
		// console.log(p2score);
		fun1();
		if(p2score >= winningscore){
			gameover = true;
			p2scorehtml.classList.add("win");
		}
	}
})
button3.addEventListener("click",function(){
	p1score=p2score=0;
	p1scorehtml.innerHTML=p2scorehtml.innerHTML=0;
	p2scorehtml.classList.remove("win");
	p1scorehtml.classList.remove("win");
	gameover = false;
	comment.innerHTML="";
})

var input =  document.querySelector("input");
input.addEventListener("change",function(){
	winningscore=input.value;
	if(p1score >= winningscore){
			gameover = true;
			p1scorehtml.classList.add("win");
		}
	if(p2score >= winningscore){
			gameover = true;
			p2scorehtml.classList.add("win");
		}
	document.querySelector("#winning-score").innerHTML=input.value;
})