


document.addEventListener("DOMContentLoaded", function() {
    function checkQualification() {
    let x = prompt("Enter your annual income:");
    x = Number(x);
    const incomeResult = document.getElementById("incomeResult");
    if (x > 50000) {
    incomeResult.innerHTML = "You are qualified!";
    } else {
    incomeResult.innerHTML = "You are not qualified!";
    }
    }
    
    checkQualification();
    });


    const characters = [
        { name: 'John Doe', description: 'CEO' },
        { name: 'Mary Jane', description: 'First' },
        { name: 'Joe Dior', description: 'Second' },
        { name: 'James Will', description: 'Third' }
    ];
    
function profileCreation(){
    const profileContainer = document.getElementById();
}

   function profileCreate(){
        for(person = 0; person < characters.length; characters++){
            const profile = profiles[characters];
            const card = document.createElement('div');
            card.className = 'col md-4';
            
        }
   }

