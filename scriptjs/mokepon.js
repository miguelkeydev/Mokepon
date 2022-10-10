const attackSection = document.getElementById("choose-attack") //Creates a variable for the 'choose-attack' section. 'document' means the HTML document. '.getElementById' means to get the HTML document by 'choose-attack' ID
const resetSection = document.getElementById("reset") //Variable for the HTML section 'reset'. 
const buttonChoosePlayer = document.getElementById("button-choose") //Variable for 'button-choose'.
const resetButton = document.getElementById("button-reset")//Variable for reset button
const choosePetSection = document.getElementById("choose-pet")

const spanPlayerPet = document.getElementById("player-pet") //Variable that contains the 'pet-player' ID which belongs to a div block in HTML
const spanEnemyPet = document.getElementById("enemy-pet")

const playerImagePet = document.getElementById("player-image-pet") //Creates a variable that contains the id 'player-image-pet' which is used as an image in HTML
const enemyImagePet = document.getElementById("enemy-image-pet")

const messagesSection = document.getElementById("result") //messagesSection will be a variable that contains the 'result' section
const playerRegisterAttacks = document.getElementById("player-attacks")
const enemyRegisterAttacks = document.getElementById("enemy-attacks")
const combatRegisterAttacks = document.getElementById("number-attack")
const combatRegister = document.getElementById("combat-register")

const spanPlayerVictories = document.getElementById("player-victories")
const spanEnemyVictories = document.getElementById("enemy-victories")

const cardsContainer = document.getElementById("cards-container")
const attacksContainer = document.getElementById("attacks-container")

let mokepons = [] //Creates an array for our mokepons
let mokeponsOption //Variable for add HTML content

let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputPydos
let inputTucapalma


let dirtButton
let fireButton
let waterButton
let buttons = [] //Array for all the buttons

let playerPetID
let playerPet
let attacksMokepon //Variable for add HTML content

let enemyAttacks = [] //This array contains the enemy number attacks
let attacksPet //Variable for the attacks of the player pet
let playerSequence = [] //This array contains the user's chosen attack
let enemySequence = []
let enemyMokeponAttacks = [] //This array contains the enemy mokepon attacks
let indexPlayerAttack
let indexEnemyAttack
let showA = 0
let numberAttack = 1
let playerVictories = 0
let enemyVictories = 0

class Mokepon { 
    constructor(name, photo, type) { //Constructs those specific thing that whole the mokepons must have
        this.name = name //Creates an attribute
        this.photo = photo
        this.type = type
        this.attacks = []
    }
}

let ratigueya = new Mokepon('Ratigüeya', './Imgs/ratigueya.png', '🔥') //With 'new' we create a new object in this case 'Mokepon' type
let hipodoge = new Mokepon('Hipodoge', './Imgs/hipodoge.png', '💧')
let capipepo = new Mokepon('Capipepo', './Imgs/capipepo.png', '🍃')
let langostelvis = new Mokepon('Langostelvis', './Imgs/langostelvis.png', '🔥')
let pydos = new Mokepon('Pydos', './Imgs/pydos.png', '💧')
let tucapalma = new Mokepon('Tucapalma', './Imgs/tucapalma.png', '🍃')

ratigueya.attacks.push( //Pushes the following attributes inside of 'ratigueya.attacks'
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' },
    { name: '💧', id: 'button-water', class: 'water-attack-button' },
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' },
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' },
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' }
)

hipodoge.attacks.push(
    { name: '💧', id: 'button-water', class: 'water-attack-button' },
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' },
    { name: '💧', id: 'button-water', class: 'water-attack-button' },
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' },
    { name: '💧', id: 'button-water', class: 'water-attack-button' }
)

capipepo.attacks.push(
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' },
    { name: '💧', id: 'button-water', class: 'water-attack-button' },
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' },
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' },
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' }
)

langostelvis.attacks.push( //Pushes the following attributes inside of 'ratigueya.attacks'
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' },
    { name: '💧', id: 'button-water', class: 'water-attack-button' },
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' },
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' },
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' }
)

pydos.attacks.push(
    { name: '💧', id: 'button-water', class: 'water-attack-button' },
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' },
    { name: '💧', id: 'button-water', class: 'water-attack-button' },
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' },
    { name: '💧', id: 'button-water', class: 'water-attack-button' }
)

tucapalma.attacks.push(
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' },
    { name: '💧', id: 'button-water', class: 'water-attack-button' },
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' },
    { name: '🔥', id: 'button-fire', class: 'fire-attack-button' },
    { name: '🍃', id: 'button-dirt', class: 'dirt-attack-button' }
)

mokepons.push(ratigueya, hipodoge, capipepo, langostelvis, pydos, tucapalma) //Pushes the mokepons inside of 'mokepons'

function startGame() { //This function starts the game when the HTML loads (last code-line)
    attackSection.style.display = "none" //Hides the attack section in HTML
    resetSection.style.display = "none"

    mokepons.forEach( (mokepon) => { //'forEach' function make something for each object inside of 'mokepons'
        mokeponsOption = ` 
        <input type="radio" name="pet" id=${mokepon.name} />
        <label class="mokepon-card" for=${mokepon.name}>
            <p>${mokepon.name}</p>
            <p>${mokepon.type}</p>
            <img src=${mokepon.photo} alt=${mokepon.name}>
        </label> 
        ` //Creates content to 'mokeponsOption'
        cardsContainer.innerHTML += mokeponsOption //for each(+=) mokepon(in this case 3) the 'cardContainer' will have the content of 'mokeponsOption' and it'll be added in HTML
    } )

    inputHipodoge = document.getElementById("Hipodoge") //Variable for 'hipodoge' input, we have to add the ID to this variable only before the 'forEach' have generated the ID in HTML 
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigüeya")
    inputLangostelvis = document.getElementById("Langostelvis")
    inputPydos = document.getElementById("Pydos")
    inputTucapalma = document.getElementById("Tucapalma")


    buttonChoosePlayer.addEventListener("click", choosePlayerPet) //'addEventListener' listen to an user event, in this case a 'click' and its response is to call the function 'choosePlayerPet'
    
    resetButton.addEventListener("click", resetGame)
}

function choosePlayerPet() { //This function allows to know which pet the user chose
    choosePetSection.style.display = "none" //Hides the 'choose-pet' section in HTML
    attackSection.style.display = "flex" //Shows the 'choose-attack' section in HTML

    if (inputRatigueya.checked) {
        choosingPlayerPet(inputRatigueya.id, ratigueya.photo)
    }
    else if (inputHipodoge.checked) { //Ckecks if the variable 'inputHipodoge' was checked
        choosingPlayerPet(inputHipodoge.id, hipodoge.photo)
    }
    else if (inputCapipepo.checked) {
        choosingPlayerPet(inputCapipepo.id, capipepo.photo)
    }
    else if (inputLangostelvis.checked) {
        choosingPlayerPet(inputLangostelvis.id, langostelvis.photo)
    }
    else if (inputPydos.checked) {
        choosingPlayerPet(inputPydos.id, pydos.photo)
    }
    else if (inputTucapalma.checked) {
        choosingPlayerPet(inputTucapalma.id, tucapalma.photo)
    }
    else {
        alert("You didn't choose a pet")
    }

    chooseEnemyPet()
    extractAttacks(playerPetID)
}

function choosingPlayerPet(petID, petPhoto) {
    spanPlayerPet.innerHTML = petID //With '.innerHTML' we overwrite that 'spanPlayerPet' HTML code
    playerPetID = petID //Saving the pet name in 'playerPetID'
    playerImagePet.setAttribute("src", petPhoto) // With '.setAttribute' we can add attributes to in this case 'playerImagePet'. We're adding an image in this case

    for (let i = 0; i < mokepons.length; i++) { //This loop travel throug the arrive 'mokepons'
        if (playerPetID == mokepons[i].name) { //Verifies if the pet is the same as the actual position name(i)
            playerPet = mokepons[i]
        }
    }
}

function chooseEnemyPet() { //This function gives the enemy a random pet
    let enemyPet = randomNumber(0, (mokepons.length - 1) ) //Random number between 0 and the number of elements in the 'mokepons' array less 1

    spanEnemyPet.innerHTML = mokepons[enemyPet].name //Sets the '.name' of the mokepon number 'enemyPet'(which is a random number) in 'mokepons'
    enemyImagePet.setAttribute("src", mokepons[enemyPet].photo)
    
    enemyMokeponAttacks = mokepons[enemyPet].attacks //adds the attacks of 'enemyPet'

    compairTypes(playerPet, mokepons[enemyPet])
}

function compairTypes(playerPet, enemyPet) {
    let newRandomAttack = randomNumber(0,4)
    if ( (playerPet.type === "🔥" && enemyPet.type === "🍃") || (playerPet.type === "💧" && enemyPet.type === "🔥") || (playerPet.type === "🍃" && enemyPet.type == "💧") ) {
        playerPet.attacks.push(playerPet.attacks[newRandomAttack])
    }
    else if ( (enemyPet.type === "🔥" && playerPet.type === "🍃") || (enemyPet.type === "💧" && playerPet.type === "🔥") || (enemyPet.type === "🍃" && playerPet.type == "💧")) {
        enemyPet.attacks.push(enemyPet.attacks[newRandomAttack])
    }
}

function extractAttacks(playerPetID) { //Recieves the 'playerPetID' as a parameter
    for (let i = 0; i < mokepons.length; i++) { //This loop travel throug the arrive 'mokepons'
        if (playerPetID == mokepons[i].name) { //Verifies if the pet is the same as the actual position name(i)
            attacksPet = mokepons[i].attacks //If the previous condition is true, the pet attacks will be added to 'attacksPet'
        }
    }

    showAttacks(attacksPet)
}

function showAttacks(attacksPet) {
    attacksPet.forEach( (attack) => {
        attacksMokepon = `
            <button class="${attack.class} + but-at" id=${attack.id}>${attack.name}</button>
        `
        attacksContainer.innerHTML += attacksMokepon
    } )

    fireButton = document.getElementById("button-fire")
    waterButton = document.getElementById("button-water")
    dirtButton = document.getElementById("button-dirt")
    buttons = document.querySelectorAll(".but-at") //With '.querySelectorAll' 'buttons' will encapsulate all the HTML objects that contains '.but-at' class

    attackSequence()
}

function attackSequence() {
    buttons.forEach( (button) => {
        button.addEventListener("click", (e) => { //(e) means the event
            if (e.target.textContent == '🔥') { //The event contains a 'target' & the target contains a 'textContent' which in this case could be '🔥'
                playerSequence.push('🔥')
                button.style.background = 'radial-gradient(black, transparent)'
                button.disabled = true // Disables the button
            }
            else if (e.target.textContent == '💧') {
                playerSequence.push('💧')
                button.style.background = 'radial-gradient(black, transparent)'
                button.disabled = true
            }
            else  {
                playerSequence.push('🍃')
                button.style.background = 'radial-gradient(black, transparent)'
                button.disabled = true
            }
            chooseEnemyAttack()
        } )
    } )
}

function chooseEnemyAttack() {
    let randomAttack = randomNumber(0, (enemyMokeponAttacks.length - 1))
    if (enemyAttacks.includes(randomAttack) === false) { //With '.includes' verifies if the random number is included in 'enemyAttacks'
        enemyAttacks.push(randomAttack)
        if (enemyMokeponAttacks[randomAttack].name == "🔥") {
            enemySequence.push("🔥")
        }
        else if (enemyMokeponAttacks[randomAttack].name == "💧") {
            enemySequence.push("💧")
        }
        else {
            enemySequence.push("🍃")
        }
        
        battleResult()
    }
    else {
        chooseEnemyAttack()
    }
}

function battleResult() {
    if (playerSequence[showA] === enemySequence[showA]) {
        bothPlayersAttacks(showA, showA)
         createMessage("DRAW!")
    }
    else if ( (playerSequence[showA] === "🔥" && enemySequence[showA] === "🍃") || (playerSequence[showA] === "💧" && enemySequence[showA] === "🔥") || (playerSequence[showA] === "🍃" && enemySequence[showA] == "💧") ) {
        bothPlayersAttacks(showA, showA)
        createMessage("YOU WON THIS BATTLE!")
        playerVictories++
        spanPlayerVictories.innerHTML = playerVictories
    }
    else {
        bothPlayersAttacks(showA, showA)
        createMessage("YOU LOST THIS BATTLE")
        enemyVictories++
        spanEnemyVictories.innerHTML = enemyVictories
    }

    showA++
    checkVictories()
}

function bothPlayersAttacks(player, enemy) {
    indexPlayerAttack = playerSequence[player]
    indexEnemyAttack = enemySequence[enemy]
}

 function createMessage(result) { //When we invoke this function, we must do it with a parameter, which in the function will have 'result' as name
    let newPlayerAttack = document.createElement("p") //Creates an HTML element 'p'
    let newEnemyAttack = document.createElement("p")
    let newAttack = document.createElement("p")

    messagesSection.innerHTML = result //Adds a text to 'paragraph'
    newPlayerAttack.innerHTML = indexPlayerAttack
    newEnemyAttack.innerHTML = indexEnemyAttack
    newAttack.innerHTML = numberAttack
    numberAttack++

    if (result === "YOU WON THIS BATTLE!") {
        newAttack.classList.add("win")
    }
    else if (result === "YOU LOST THIS BATTLE") {
        newAttack.classList.add("lose")
    }
    else if (result === "DRAW!") {
        newAttack.classList.add("draw")
    }

    playerRegisterAttacks.appendChild(newPlayerAttack)//The text inside of 'newEnemyAttack' will be append at the end of the messagesSection. Only append, not replaced
    enemyRegisterAttacks.appendChild(newEnemyAttack)
    combatRegisterAttacks.appendChild(newAttack)
 }

function checkVictories() {
    if (showA === 5) {
        if (playerVictories === enemyVictories) {
            endGameMessage("🤝THIS WAS A DRAW🤝")
        }
        else if(playerVictories > enemyVictories) {
            endGameMessage("🎉YOU WON THE MATCH!🎉")
        }
        else {
            endGameMessage("😔YOU LOST THE MATCH😔")
        }
    }
}

function endGameMessage(gameResult) {
    messagesSection.innerHTML = gameResult

    resetSection.style.display = "block" //Shows the reset section
    
    buttons.forEach( (button) => {
        button.disabled = true
    } )
}

function resetGame() {
    location.reload() //Reloads the page. Resets everything
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", startGame) //This line-code is the first(and only) out of any function. It means that this will execute automatically. When the HTML loads, calls automatically to the function 'startGame' and the code starts. This allows to insert the JS script in the html head.