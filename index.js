const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
const [bessie, dolly, babe, little] = farmAnimals.split(' ').filter(animal => animal !== 'horse');
const [blackAndWhite, black, sheep] = farmAnimals.split(' ').filter(animal => animal !== 'chicken');

// Arrays
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, indg, v] = colors;
const [, orange1, yellow1,, blue1, indigo1,] = colors;

// Objects
const { muppetName, color, song, job, partner } = muppet;
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

console.log(moo, neigh, baa, oink, cluck);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, sheep);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, indg, v);
console.log(indg);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);
