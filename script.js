
function checkQualification() {
   let  x = prompt();
    x = Number(x);
    const  incomeResult = document.getElementById("incomeResult")
    if (x > 50000){
        incomeResult.innerHTML = "You are qualified!";

    } else{
        incomeResult.innerHTML = "You are not qualified!";
    }

    
}
checkQualification();
