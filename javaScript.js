let counter = 0;

//selecting button and value

let dummy = document.querySelector("#val");
const butto = document.querySelectorAll(".butt");
//console.log(butto);

butto.forEach(function(dummyButton)
{
   // console.log("1");
    dummyButton.addEventListener("click", function(event)
    {
        //console.log("2");
        let current=event.currentTarget.classList;
        if(current.contains("1"))
        {
            //console.log("3");
            counter--;   
        }
        else if(current.contains("2"))
        {
            //console.log("3");
            counter=0;   
        }
        else if(current.contains("3"))
        {
            //console.log("3");
            counter++;   
        }
        
        if(counter>0)
        {
            dummy.style.color="green";
        }
        else if(counter==0)
        {
            dummy.style.color="black";
        }
        else
        {
            dummy.style.color="brown";
        }
        
        dummy.innerHTML=counter;

    });

});




/*
let dummy = document.querySelector("#val");
const butto = document.getElementById("bt1");

console.log(dummy);
console.log(butto);
butto.addEventListener("click ", function (event) {
    
    console.log("hyyyyy");
    counter--;
    dummy.innerHTML = counter;

});
*/