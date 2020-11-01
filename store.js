const STORE = {
  currentScore: 0,
  currentQuestion: 0,
  startingQuestion: 0,
  questions: [
     {
        question: "What was Tandem previous name?",
        options: ["Tandem", "Burger Shack", "Extraordinary Humans","Devmynd"],
        correct: 3
     },
      {
        question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
        options: ["Iacta alea est!", "Vidi, vini, vici", "Et tu, Brute?","Aegri somnia vana"],
        correct: 2   
      },
      {
        question: "A group of tigers are referred to as:",
        options: ["Ambush","Chowder", "Pride", "Destruction"],
        correct: 2
      },
      
      {
       question: "What is the top speed an average cat can travel?",
       options: ["42 mph", "13 mph", "9 mph","31 mph"],
       correct: 3 
      },
      {
        question: "A cat can jump to _____ times its own height:",
       options: ["3", "5","9", "7"],
       correct: 1 
      },
      {
       question: "What is the only letter that doesn't appear in a US state name?",
       options: ["M", "Z", "Q", "X"],
       correct: 2  
      },
      {
       question: "What is the name for a cow-bison hybrid?",
       options: ["Cowson", "Beefalo", "Bicow", "Mooson"],
       correct: 1 
      },
      {
       question: "What is the largest freshwater lake in the world?",
       options: ["Lake Baikal", "Lake Michigan", "Lake Victoria", "Lake Superior"],
       correct: 3  
      },
      {
       question: "In a website address bar, what does WWW stand for?",
       options: ["World Wide Web", "Wild Wild West", "War World Web"],
       correct: 0 
      },
      {
       question: "In a game of bingo, what number is represented by the name two little ducks?",
       options: ["20", "55", "22", "77"],
       correct: 2
      },
      {
        question: "According to Greek mythology, who was the first woman on Earth?",
        options: ["Lilith", "Eve", "Hera", "Pandora"],
        correct: 3
      },
      {
        question: "In which European city would you find Orly airport?",
        options: ["Paris", "London", "Belgium", "Munich"],
        correct: 0
      },
      {
        question: "Where would you find the Sea of Tranquility?",
        options: ["California", "The Moon", "Siberia", "China"],
        correct: 1
      },
      {
        question: "Which artist painted 'Girl with a Pearl Earrin'?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Vermeer"],
        correct: 3
      },
      {
        question: "What is the official name for the 'hashtag' symbol?",
        options: ["Number sign", "Hash Sign", "Octothorpe", "Pound"],
        correct: 2
      },
      {
        question: "Not American at all, where is apple pie from?",
        options: ["Japan", "England", "Ethiopia", "Canada"],
        correct: 1
      },
      {
        question: "What is the national animal of Scotland?",
        options: ["Unicorn", "Bear", "Rabbit", "Seal"],
        correct: 0
      },
      {
        question: "Where in the world is the only place where Canada is *due south*",
        options: [ "Detroit", "Alaska", "Russia", "Washington"],
        correct: 0
      },
      {
        question: "Approximately how many grapes go into a bottle of wine?",
        options: ["500", "200", "700", "1000"],
        correct: 2
      },
      {
        question: "How much does a US One Dollar Bill cost to make?",
        options: ["$0.25", "$1", "$5", "$0.05"],
        correct: 3
      },
      {
        question: "The Vatican bank has the only ATM in the world that allows users to do what?",
        options: [
          "Receive withdrawls in rosary beads",
          "Vote for the Pope",
          "Purchase indulgences",
          "Perform transactions in Latin"
        ],
        correct: 3
      },
    ],
    increaseScore: function() {
      this.currentScore++;
    },
    increaseQuestion: function() {
      this.currentQuestion++;
    }
}