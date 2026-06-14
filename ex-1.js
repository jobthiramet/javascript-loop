// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
let newScores = scores.map(function(score) {
    return score - 10;
});

console.log(newScores);