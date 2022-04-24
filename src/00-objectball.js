const gameObject = () => {
    return ({
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson" : {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans" : {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez" : {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee" : {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry" : {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }, 
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien" : {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo" : {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop" : {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon" : {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood" : {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }, 
            }
        }
    })
}

96
const homeTeam = () => gameObject().home;
const awayTeam = () => gameObject().away;

const allPlayers = () => {
    return {...homeTeam().players, ...awayTeam().players}
}

const numPointsScored = (playerName) => allPlayers()[playerName].points;

const shoeSize = (playerName) => allPlayers()[playerName].shoe;

const playerStats = (playerName) => allPlayers()[playerName];

const playerNumbers = (teamName) => {
    const numbers = [];
    if (homeTeam().teamName === teamName) {
        for (const player in homeTeam().players) {
            numbers.push(allPlayers()[player].number)
        }
    } else {
        for (const player in awayTeam().players) {
            numbers.push(allPlayers()[player].number)
        }
    }
    return numbers;
}

const bigShoeRebounds = () => {
    let biggestShoe = 0;
    let playerWithBiggestShoe = '';

    Object.entries(allPlayers()).forEach(([playerName, playerStats]) => {
        if (playerStats.shoe > biggestShoe) {
            biggestShoe = playerStats.shoe
            playerWithBiggestShoe = playerName;
        }
    })

    return allPlayers()[playerWithBiggestShoe].rebounds;
}

const teamColors = (teamName) => homeTeam().teamName === teamName ? homeTeam().colors : awayTeam().colors;

const teamNames = () => [homeTeam().teamName, awayTeam().teamName]

const mostPointsScored = () => {
    let mostPoints = 0;
    let playerWithMostPoints = '';

    Object.entries(allPlayers()).forEach(([playerName, playerStats]) => {
        if (playerStats.points > mostPoints) {
            mostPoints = playerStats.points
            playerWithMostPoints = playerName;
        }
    })

    return `${playerWithMostPoints}: ${allPlayers()[playerWithMostPoints].points}pts`;
}

const playerWithLongestName = () => {
    let lengthOfLongestName = 0;
    let player = '';

    Object.keys(allPlayers()).forEach((playerName) => {
        if (playerName.length > lengthOfLongestName) {
            lengthOfLongestName = playerName.length;
            player = playerName;
        }
    })

    return player;
};

const playerWithMostSteals = () => {
    let mostSteals = 0;
    let player = '';

    Object.entries(allPlayers()).forEach(([playerName, playerStats]) => {
        if (playerStats.steals > mostSteals) {
            mostSteals = playerStats.steals;
            player = playerName;
        }
    })

    return player;
};


const winningTeam = () => {
    const homeTeamPoints = Object.values(homeTeam().players)
        .reduce((totalPoints, player) => totalPoints + player.points, 0);

    const awayTeamPoints = Object.values(awayTeam().players)
        .reduce((totalPoints, player) => totalPoints + player.points, 0);

    return homeTeamPoints > awayTeamPoints ? homeTeam().teamName : awayTeam().teamName
}

const doesLongNameStealATon = () => playerWithLongestName() === playerWithMostSteals();

debugger;