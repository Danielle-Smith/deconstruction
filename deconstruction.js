//   How to Swap Variable Values with Variable Deconstruction

let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo; // this and...

playerOne = tempPlayerTwo; // this was the way you had to do it before
playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne]; // ***this is the way to switch variable values

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

// Array Destructuring 

const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]
  
  const [posts, repos, profile] = apiList; //**nice easy and clean way of doing this task
  
  console.log(posts);
  console.log(repos);
  console.log(profile);

//   How to pass javascript objects as function arguments by leveraging deconstruction

const user = {
    name: 'Kristine',
    email: 'kristine@devcamp.com'
  }
  
  const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
  }
  
  renderUser(user);
