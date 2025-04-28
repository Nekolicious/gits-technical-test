// Reference https://oeis.org/A000124
function A000124(n) {
    // A000124 Triangle numbers: T(n) = n(n+1)/2
    var n = document.getElementById("a000124").value;
    var result = [];

    for (var i = 0; i < n; i++) {
        result.push(i * (i + 1) / 2 + 1);
    }

    document.getElementById("a000124_result").innerHTML = result.join(", ");
}

function Reset_result(id) {
    const resultTextarea = document.getElementById(id);
    resultTextarea.innerHTML = "";
    resultTextarea.style.height = "";
    resultTextarea.rows = 2;
}

