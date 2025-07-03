function submit(){

    const name1= document.querySelectorAll("input")[0].value.trim();
    const name2= document.querySelectorAll("input")[1].value.trim();

    if (name1 ==="" && name2 ===""){
        alert("Both players must enter their names! ");
        result;
    }else if(name1 ===""){
        alert("player 1 should enter the name! ");
        result;
    }else if(name2 ===""){
        alert("player 2 must enter the name! ");
        result;
    }



    //user 1
    let num1=Math.floor(Math.random()*6)+1;//genetrate random number
    let imagePath1 ="image/image"+num1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",imagePath1);

    //user 2
     let num2=Math.floor(Math.random()*6)+1;//genetrate random number
     let imagePath2 = "image/image"+num2+".png";
     document.querySelectorAll("img")[1].setAttribute("src",imagePath2);


    let result="";
    if(num1>num2){
        result= `${name1}🚩Wins!`;
    }else if(num2>num1){
        result= `${name2}🚩Wins!`;
    }else{
        result= `${name1} and ${name2} - It's a Draw `;
    
    document.getElementById("tag").innerText=result;
}


