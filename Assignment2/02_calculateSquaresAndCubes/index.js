function calculateSquaresAndCubes() {
    let output = "<table><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    for (let i = 0; i <= 10; i++) {
        output += "<tr><td>" + i + "</td><td>" + (i * i) + "</td><td>" + (i * i * i) + "</td></tr>";
    }
    output += "</table>";
    document.getElementById("results").innerHTML = output;
}