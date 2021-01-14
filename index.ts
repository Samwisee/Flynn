const animalsArray: string[] = ["african-grey-parrot", "alligator", "alpaca", "anteater", "antelope", "ape", "bat", "bee", "bowhead-whale", "buffalo", "butterfly", "camel", "cat", "chicken", "rooster", "cow", "crow", "dinosaur", "dog", "dove", "duck", "elephant", "falcon", "ferret", "frog", "giraffe", "guinea-pig", "hedgehog", "hippopotamus", "horse", "humpback-whale", "hyena", "komodo-dragon", "leopard", "lion", "lizard", "moose", "otter", "owl", "panda", "penguin", "pig", "rabbit", "raccoon", "rat", "rattlesnake", "rhinoceros", "robin", "scorpion", "shark", "sheep", "swan", "tiger", "turkey", "wolf", "yak", "zebra"]

function shuffleAnimals (array){
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

shuffleAnimals(animalsArray)