


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
    const profileContainer = document.getElementById(characters);
}

   function profileCreate(){
    function createCharacterCards() {
        const characterContainer = document.getElementById('character-container');

        
        for (let i = 0; i < characters.length; i++) {
            const character = characters[i];

            const card = document.createElement('div');
            card.className = 'col-md-4';

            card.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">${character.description}</p>
                    </div>
                </div>
            `;

            
            characterContainer.appendChild(card);
        }
    }

    
    document.addEventListener('DOMContentLoaded', createCharacterCards);
        }
   

