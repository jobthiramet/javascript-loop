// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = scores.reduce(function(min, score) {
    if (score < min) {
        return score;
    }
    return min;
});

console.log(minScore);
console.log(minScore);
