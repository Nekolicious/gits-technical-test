// Reference: https://www.geeksforgeeks.org/dense-rank-in-sql/
function DenseRank(scores, gitScores) {
    // gitScores = [5, 25, 50, 120];
    // scores = [100, 100, 50, 40, 40, 20, 10];

    const sortedScores = [...new Set(scores)].sort((a, b) => b - a);
    const result = [];
    let idx = sortedScores.length - 1;
    for (const score of gitScores) {
        // If the score current score is greater than the highest score, it should be ranked 1
        while (idx >= 0 && score >= sortedScores[idx]) {
            idx--;
        }
        // If the score is less than the lowest score, it should be ranked len(sortedScores) + 1
        result.push(idx + 2);
    }

    return result;
}

function CalculateRank() {
    const scoresInput = document.getElementById("scores").value.trim();
    const gitScoreInput = document.getElementById("gitScores").value.trim();

    const scores = scoresInput ? scoresInput.split(" ").map(Number) : [100, 100, 50, 40, 40, 20, 10];
    const gitScores = gitScoreInput ? gitScoreInput.split(" ").map(Number) : [5, 25, 50, 120];

    const result = DenseRank(scores, gitScores);

    // console.log(scores);
    // console.log(gitScores);

    document.getElementById("denserank_result").innerHTML = result.join(" ");
}

function validateNumbers(textarea) {
    textarea.value = textarea.value.replace(/[^0-9\s]/g, '');
}
