

document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("count-button");
    const resultElement = document.getElementById("result-luas");

    calculateButton.addEventListener("click", function() {
        const baseInput = document.getElementById("alas-input");
        const heightInput = document.getElementById("tinggi-input");

        const base = parseFloat(baseInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(base) || isNaN(height)) {
            resultElement.textContent = "Masukkan tinggi dan alas segitiga yang valid!";
        } else {
            const area = calculateTriangleArea(base, height);
            resultElement.textContent = `${area}`;
        }
    });

    function calculateTriangleArea(base, height) {
        return (base * height) / 2;
    }
});



function resetluas(){
    const alasinput = document.getElementById("alas-input");
    const tinggiinput = document.getElementById("tinggi-input");
    alasinput.value = null;
    tinggiinput.value = null;
    document.getElementById ()= alasinput.value;
    document.getElementById()= tinggiinput.value;
}

document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("count-btn");
    const resultElement = document.getElementById("result-keliling");

    calculateButton.addEventListener("click", function() {
        const sisi1Input = document.getElementById("sisi1-input");
        const sisi2Input = document.getElementById("sisi2-input");
        const sisi3Input = document.getElementById("sisi3-input");

        const sisi1 = parseFloat(sisi1Input.value);
        const sisi2 = parseFloat(sisi2Input.value);
        const sisi3 = parseFloat(sisi3Input.value);

        if (isNaN(sisi1) || isNaN(sisi2)|| isNaN(sisi3)) {
            resultElement.textContent = "Masukkan sisi-sisi segitiga yang valid!";
        } else {
            const Perimeter = calculateTrianglePerimeter(sisi1, sisi2, sisi3);
            resultElement.textContent = `${Perimeter}`;
        }
    });

    function calculateTrianglePerimeter(sisi1, sisi2, sisi3) {
        return (sisi1 + sisi2 + sisi3);
    }
});

function resetkeliling(){
    const sisi1input = document.getElementById("sisi1-input");
    const sisi2input = document.getElementById("sisi2-input");
    const sisi3input = document.getElementById("sisi3-input");
    sisi1input.value = null;
    sisi2input.value = null;
    sisi3input.value = null;
    document.getElementById ()= sisi1input.value;
    document.getElementById()= sisi2input.value;
    document.getElementById()= sisi3input.value;
}
