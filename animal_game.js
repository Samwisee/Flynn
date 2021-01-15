// Get urls for audio and images
var imageURL = function (animal) { return "https://www.google.com/logos/fnbx/animal_sounds/" + animal + ".png"; };
var audioURL = function (randomAnimal) { return "https://www.google.com/logos/fnbx/animal_sounds/" + randomAnimal + ".mp3"; };
var score = 0;
function buildGame() {
    var newGameBtn = document.getElementById("new-animals");
    newGameBtn.addEventListener("click", function (event) {
        // Check if 
        var audioCheck = document.getElementById("animal-audio");
        if (typeof (audioCheck) != 'undefined' && audioCheck != null) {
            var animalButton = document.querySelectorAll(".animal-button");
            animalButton.forEach(function (button) {
                button.remove();
            });
            removeGame("#animal-audio");
            ;
        }
        // Builds animal audio and random set of 3 animals for buttons
        var animals = shuffleAnimals(animalsArray);
        var randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        animals = animals.map(function (animal) {
            console.log(typeof (animal));
            return createAnimalButton(animal);
        });
        var animalAudio = createAnimalAudio(randomAnimal);
        var audioContainer = document.getElementById("audio-container");
        var animalContainer = document.getElementById("animal-container");
        audioContainer.append(animalAudio);
        animalContainer.append.apply(animalContainer, animals);
        // Checks if the button clicked by the user is the correct animal or not and applies background color
        function clickStyle(event, animal) {
            if (animal === randomAnimal) {
                event.currentTarget.classList.add("success-background");
                var answer = document.querySelector("#answer");
                score++;
                answer.innerHTML = "<h2>Yes it's " + prefix(randomAnimal) + " " + randomAnimal + "!</h2><h2>Score: " + score + "</h2>";
                console.log(score);
            }
            else {
                event.currentTarget.classList.add("fail-background");
            }
        }
        // Changes the prefix for the animal depending on vowels
        prefix = function (animal) {
            if (animal[0] === "a" ||
                animal[0] === "e" ||
                animal[0] === "i" ||
                animal[0] === "o" ||
                animal[0] === "u") {
                return "an";
            }
            else {
                return "a";
            }
        };
        // Builds the animal button html element and nested image tag
        function createAnimalButton(animal) {
            var button = document.createElement("button");
            var image = document.createElement("img");
            button.className = "animal-button";
            button.addEventListener("click", function (event) { return clickStyle(event, animal); });
            image.src = imageURL(animal);
            button.appendChild(image);
            answer.innerHTML = '';
            return button;
        }
        // Builds audio control element for random animal from buttons
        function createAnimalAudio(randomAnimal) {
            var audio = document.createElement("audio");
            audio.controls = true;
            audio.id = "animal-audio";
            audio.src = audioURL(randomAnimal);
            return audio;
        }
    });
}
function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
// Clear game
function removeGame(element) {
    var elem = document.querySelector("" + element);
    elem.parentNode.removeChild(elem);
}
buildGame();
