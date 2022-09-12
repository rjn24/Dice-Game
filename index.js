var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice"+randomnumber1+".png";

var randomimageSource1 = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimageSource1);

var randomnumber2=Math.floor(Math.random()*6)+1 ;
var randomDiceImage2 = "dice"+randomnumber2+".png";
var randomimageSource2 = "images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimageSource2);




if (randomnumber1 > randomnumber2)

{

    document.querySelector("h1").innerHTML="Player 1 wins 🎉";

}

else if(randomnumber2>randomnumber1)

{

    document.querySelector("h1").innerHTML="Player 2 wins 🎉";

}

else 

{

    document.querySelector("h1").innerHTML="Its a draw 🎉";

}