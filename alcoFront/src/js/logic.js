let BACValue;
var BAC_per_hour = 0.015;
function getAlc() {
  let genderConstant;
  let weight;

  // Show input field container based on the selected radioButton
  const genderBtn = document.querySelector('input[name="genderBtn"]:checked');

  if (genderBtn.value === "male") {
    genderConstant = 0.68;
  } else if (genderBtn.value === "female") {
    genderConstant = 0.55;
  }

  // Convert weight to a number
  weight = parseFloat(bodyWeight.value);

  // Calculate the total alcohol consumed from Soju shots and beer bottles
  let sojuShots = parseFloat(document.getElementById("sojuShot").value) || 0;
  let beerBottles =
    parseFloat(document.getElementById("beerBottle").value) || 0;

  // Alcohol content of Soju and beer (as decimal values)
  const sojuAlcoholContent = 0.129;
  const beerAlcoholContent = 0.05;

  // Total alcohol consumed in grams
  let totalAlcoholGrams =
    sojuShots * 44 * sojuAlcoholContent +
    beerBottles * 325 * beerAlcoholContent;

  // Convert weight to grams
  let weightGrams = weight * 1000;

  // Blood alcohol level (BAC) calculation
  let BAC = (totalAlcoholGrams / (weightGrams * genderConstant)) * 100;

  // Display alcohol percentage and total alcohol consumed
  const resultDisplay = document.getElementById("alc_percentage_display");
  resultDisplay.textContent = `Blood Alcohol Content (BAC): ${BAC.toFixed(4)}%`;

  BACValue = BAC;

  // Call the function to create and update the graph with the BAC value
  createGraphWithBAC(BACValue);
}

function createGraphWithBAC(BACValue) {
  let ctx = document.getElementById("BAC_chart").getContext("2d");

  let curentHour = new Date().getHours();

  // Sample data for the chart
  let data = {
    labels: [
      curentHour,
      curentHour + 1,
      curentHour + 2,
      curentHour + 3,
      curentHour + 4,
    ],
    datasets: [
      {
        label: "Blood Alcohol %",
        data: [
          BACValue - BAC_per_hour * 0,
          BACValue - BAC_per_hour * 1,
          BACValue - BAC_per_hour * 2,
          BACValue - BAC_per_hour * 3,
          BACValue - BAC_per_hour * 4,
        ],

        //borderColor: 'rgba(75, 192, 192, 1)',
        //borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Chart configuration
  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          min: 0,
          beginAtZero: false,
        },
      },
    },
  };

  // Create the chart
  let myChart = new Chart(ctx, config);
}
