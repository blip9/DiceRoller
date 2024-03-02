const noOfDice = document.getElementById("noOfDice").value;
const result = document.getElementById("result");
const images = document.getElementById("images");
const roll = document.getElementById("roll");
function f1(){
        const noOfDice = document.getElementById("noOfDice").value;
        let diceResult=[];
        const diceImages =[];
        for(let i=0;i<noOfDice;i++){
            let diceResult1 = Math.ceil(Math.random()*(6));
            diceResult.push(diceResult1);
            diceImages.push(`<img src="media/${diceResult1}.png">`);

        }
        result.textContent = `The dice results are :  ${diceResult.join('  ,')}`;  
        images.innerHTML = diceImages.join("");
        console.log(diceResult);
}