// let obj = {
//   home: {
//     teamName: "Brooklyn Nets",
//     colors: ["Black", "White"],
//     players: {
//       "Alan Anderson": {
//         number: 0,
//         shoe: 16,
//         points: 22,
//         rebounds: 12,
//         assists: 12,
//         steals: 3,
//         blocks: 1,
//         slamDunks: 1,
//       },
//       "Reggie Evans": {
//         number: 30,
//         shoe: 14,
//         points: 12,
//         rebounds: 12,
//         assists: 12,
//         steals: 12,
//         blocks: 12,
//         slamDunks: 7,
//       },
//       "Brook Lopez": {
//         number: 11,
//         shoe: 17,
//         points: 17,
//         rebounds: 19,
//         assists: 10,
//         steals: 3,
//         blocks: 1,
//         slamDunks: 15,
//       },
//       "Mason Plumlee": {
//         number: 1,
//         shoe: 19,
//         points: 26,
//         rebounds: 12,
//         assists: 6,
//         steals: 3,
//         blocks: 8,
//         slamDunks: 5,
//       },
//       "Jason Terry": {
//         number: 31,
//         shoe: 15,
//         points: 19,
//         rebounds: 2,
//         assists: 2,
//         steals: 4,
//         blocks: 11,
//         slamDunks: 1,
//       },
//     },
//   },
//   away: {
//     teamName: "Charlotte Hornets",
//     colors: ["Turquiose", "Purple"],
//     players: {
//       "Jeff Adrien": {
//         number: 4,
//         shoe: 18,
//         points: 10,
//         rebounds: 1,
//         assists: 1,
//         steals: 2,
//         blocks: 7,
//         slamDunks: 2,
//       },
//       "Bismak Biyombo": {
//         number: 0,
//         shoe: 16,
//         points: 12,
//         rebounds: 4,
//         assists: 7,
//         steals: 7,
//         blocks: 15,
//         slamDunks: 10,
//       },
//       "Desagna Diop": {
//         number: 2,
//         shoe: 14,
//         points: 24,
//         rebounds: 12,
//         assists: 12,
//         steals: 4,
//         blocks: 5,
//         slamDunks: 5,
//       },
//       "Ben Gordon": {
//         number: 8,
//         shoe: 15,
//         points: 33,
//         rebounds: 3,
//         assists: 2,
//         steals: 1,
//         blocks: 1,
//         slamDunks: 0,
//       },
//       "Brendan Haywood": {
//         number: 33,
//         shoe: 15,
//         points: 6,
//         rebounds: 12,
//         assists: 12,
//         steals: 22,
//         blocks: 5,
//         slamDunks: 12,
//       },
//     },
//   },
// };

function gameObject() {
  let object = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquiose", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "Desagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return object;
}

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());

// when passed in a name return how many points the player scored
function numPointsScored(name) {
  //   let game = gameObject();
  //   let homePlayers = game.home.players;
  //   let awayPlayers = game.away.players;
  //   let players = { ...homePlayers, ...awayPlayers };
  for (let player in playersOnlyObj()) {
    if (player === name) {
      // console.log(playersOnlyObj()[player]);
      return playersOnlyObj()[player].points;
    }
  }
}
function playersOnlyObj() {
  //let game = gameObject();
  // let homePlayers = gameObject().home.players;
  // let awayPlayers = gameObject().away.players;
  //   let players = { ...gameObject().home.players, ...gameObject().away.players };
  //   return players;
  return { ...gameObject().home.players, ...gameObject().away.players };
}
console.log(numPointsScored("Brendan Haywood"));

function shoeSize(name) {
  for (let player in playersOnlyObj()) {
    if (player === name) {
      return playersOnlyObj()[name].shoe;
    }
  }
}
console.log(shoeSize("Brendan Haywood"));

function teamColors(name4Color) {
  if (name4Color === gameObject().home.teamName) {
    return gameObject().home.colors;
  } else if (name4Color === gameObject().away.teamName) {
    return gameObject().away.colors;
  }
}
console.log(teamColors("Charlotte Hornets"));

function teamNames() {
  return [gameObject().home.teamName, gameObject().away.teamName];
}
console.log(teamNames());

function homePlayers() {
  return { ...gameObject().home.players };
}

function playerNumbers(name) {
  let jerseyArray = [];
  if (name === gameObject().home.teamName) {
    for (let player in homePlayers()) {
      let playerNumber = homePlayers()[player].number;
      jerseyArray.push(playerNumber);
    }
  } else if (name === gameObject().away.teamName) {
    for (let player in awayPlayers()) {
      let playerNumber = awayPlayers()[player].number;
      jerseyArray.push(playerNumber);
    }
  }
  return jerseyArray;
}

console.log(playerNumbers("Brooklyn Nets"));

function playStats(name) {
  for (let player in playersOnlyObj()) {
    if (player === name) {
      return playersOnlyObj()[player] /*.points*/;
    }
  }
}

console.log(playStats("Ben Gordon"));
