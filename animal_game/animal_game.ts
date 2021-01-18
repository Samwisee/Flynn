 // Get urls for audio and images
 const imageURL = (animal) => `https://www.google.com/logos/fnbx/animal_sounds/${animal}.png`
 const audioURL = (randomAnimal) => `https://www.google.com/logos/fnbx/animal_sounds/${randomAnimal}.mp3`
 let score: number = 0

 const animalsArray: string[] = ["african-grey-parrot", "alligator", "alpaca", "anteater", "antelope", "ape", "bat", "bee", "bowhead-whale", "buffalo", "butterfly", "camel", "cat", "chicken", "rooster", "cow", "crow", "dinosaur", "dog", "dove", "duck", "elephant", "falcon", "ferret", "frog", "giraffe", "guinea-pig", "hedgehog", "hippopotamus", "horse", "humpback-whale", "hyena", "komodo-dragon", "leopard", "lion", "lizard", "moose", "otter", "owl", "panda", "penguin", "pig", "rabbit", "raccoon", "rat", "rattlesnake", "rhinoceros", "robin", "scorpion", "shark", "sheep", "swan", "tiger", "turkey", "wolf", "yak", "zebra"]

  function shuffleAnimals (array){
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }
  
  function buildGame() {
    const answer = document.querySelector("#answer")
    const newGameBtn = document.getElementById("new-animals")
    newGameBtn.addEventListener("click", (event) => {

      // Check if 
    let audioCheck = document.getElementById("animal-audio")

    if(typeof(audioCheck) != 'undefined' && audioCheck != null){
      const animalButton = document.querySelectorAll(".animal-button");
      animalButton.forEach((button) =>  {
        button.remove();
      })
      removeGame("#animal-audio");
      ;
    }

     // Builds animal audio and random set of 3 animals for buttons
    let animals = shuffleAnimals(animalsArray)
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)]

    animals = animals.map((animal) => {
      console.log(typeof(animal))
      return createAnimalButton(animal)
    })

    var animalAudio = createAnimalAudio(randomAnimal)
    var audioContainer = document.getElementById("audio-container")
    var animalContainer = document.getElementById("animal-container")
    audioContainer.append(animalAudio)
    animalContainer.append(...animals)

   // Checks if the button clicked by the user is the correct animal or not and applies background color
  function clickStyle(event, animal){
    if (animal === randomAnimal) {
      event.currentTarget.classList.add("success-background")
      score++
      answer.innerHTML = `<h2>Yes it's ${prefix(randomAnimal)} ${randomAnimal}!</h2><h2>Score: ${score}</h2>`
      console.log(score)
    } else {
      event.currentTarget.classList.add("fail-background")
    }
  }

  // Changes the prefix for the animal depending on vowels
  const prefix = (animal) => {
    if (animal[0] === "a" ||
        animal[0] === "e" ||
        animal[0] === "i" || 
        animal[0] === "o" || 
        animal[0] === "u") {
      return "an"
    } else {
      return "a"
    }
  }

  // Builds the animal button html element and nested image tag
  function createAnimalButton(animal){
    let button = document.createElement("button")
    let image = document.createElement("img")
    button.className = "animal-button"
    button.addEventListener("click", (event) => clickStyle(event, animal))
    image.src = imageURL(animal)
    button.appendChild(image)
    answer.innerHTML = ''
    return button
  }

  // Builds audio control element for random animal from buttons
  function createAnimalAudio(randomAnimal){
    let audio = document.createElement("audio")
    audio.controls = true
    audio.id = "animal-audio"
    audio.src = audioURL(randomAnimal)
    return audio
    } 
  })
}

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

// Clear game
function removeGame(element) {
  var elem = document.querySelector(`${element}`);
  elem.parentNode.removeChild(elem);
}

buildGame();
