var noOfSquares=6;
var colours=[];
var pickedColor;

var sq=document.querySelectorAll(".sq");
var rgb_disp=document.querySelector("#rgb_disp");
var correct=document.querySelector("#correct");
var btns=document.querySelectorAll(".mode");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");


init();



function init(){

	for(var i=0;i<btns.length;i++){
		btns[i].addEventListener("click",function(){
			btns[0].classList.remove("selected");
			btns[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent==="Easy"?noOfSquares=3:noOfSquares=6;
			resetAll();
		});
	}

	for(let i=0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor=colours[i];

		sq[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor){
				correct.textContent="Correct!!";
				changeColor();
				h1.style.backgroundColor=pickedColor;
				reset.textContent="Play Again?"
			}
			else{
				correct.textContent="Try Again!!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
	resetAll();
}



function resetAll(){
	colours=addRandom(noOfSquares);
	pickedColor=pickColor();
	rgb_disp.textContent=pickedColor;
	correct.textContent="";
	reset.textContent="New Colours!"

	for(var i=0;i < sq.length;i++)
	{
		if(colours[i]){
			sq[i].style.display="block";
			sq[i].style.backgroundColor=colours[i];
		}
		else
			sq[i].style.display="none";
	}
	h1.style.backgroundColor="steelblue";

}


//THIS IS ALL THAT WE DID FIRST...JUST FOR KNOWLEDGE
// easy.addEventListener("click",function(){
// 	noOfSquares=3;
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	colours=addRandom(noOfSquares);
// 	pickedColor=pickColor();
// 	rgb_disp.textContent=pickedColor;
// 	h1.style.backgroundColor="steelblue";
// 	correct.textContent="";

// 	for(var i=0;i < sq.length;i++)
// 	{
// 		if(colours[i])
// 			sq[i].style.backgroundColor=colours[i];
// 		else
// 			sq[i].style.display="none";
// 	}
// });

// hard.addEventListener("click",function(){
// 	noOfSquares=6;
// 	easy.classList.remove("selected");
// 	hard.classList.add("selected");
// 	colours=addRandom(noOfSquares);
// 	pickedColor=pickColor();
// 	rgb_disp.textContent=pickedColor;
// 	for(var i=0;i<sq.length;i++)
// 	{
// 		sq[i].style.backgroundColor=colours[i];
// 		sq[i].style.display="block";
// 	}
// 	h1.style.backgroundColor="steelblue";
// 	correct.textContent="";

// });



function addRandom(num){
	var a=[];
	for(var i=0;i<num;i++)
	{
		a.push(createRandom());
	}
	return a;
}



function createRandom(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




function changeColor(){
	for(var i=0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor=pickedColor;
	}
}



function pickColor(){
	var random=Math.floor(Math.random()*colours.length);
	return(colours[random]);
}



reset.addEventListener("click",function(){
	resetAll();
});



