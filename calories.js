const maleRadio = document.querySelector("#male");
const femaleRadio = document.querySelector("#female");
const caloriesBtn = document.querySelector("#calories")
const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const age = document.querySelector("#age")
const activityLevel = document.querySelector("#activity");


const generateModal = (calories) => {
  // Maintain weight variables
  const carbsMaintain = Math.round((calories * 0.5) / 4);
  const proteinMaintain = Math.round((calories * 0.3) / 4);
  const fatMaintain = Math.round((calories * 0.2) / 9);
  // Gain weight variables
  const gainWeight = calories + 500;
  const carbsGain = Math.round((gainWeight * 0.5) / 4);
  const proteinGain = Math.round((gainWeight * 0.3) / 4);
  const fatGain = Math.round((gainWeight * 0.2) / 9);
  // Lose weight variables
  const loseWeight = calories - 500;
  const carbsLose = Math.round((loseWeight * 0.5) / 4);
  const proteinLose = Math.round((loseWeight * 0.3) / 4);
  const fatLose = Math.round((loseWeight * 0.2) / 9);

  
  // Get container div
  const body = document.querySelector("body");

  // Create 1st div (overlay)
  let div = document.createElement("div");

  // Create 2nd div (modal-content)
  let modalContent = document.createElement("div");

  // Create close button
  let closeBtn = document.createElement("span");

  // * Assign classes
  // 1st div class
  div.classList.add("modal-effect");
  // 2nd div class
  modalContent.classList.add("modal-info");
  // close button class
  closeBtn.classList.add("closeBtn");


  // * Insert HTML
  // Insert HTML into 2nd div
  modalContent.innerHTML = `
    <div>
      <h6 class="center-align">You need to consume <b>${calories} calories</b> a day to maintain youre weight!</h6>
      <p class="center-align mb-20p"><b>${carbsMaintain}g of carbs, ${proteinMaintain}g of protein, ${fatMaintain}g of fat</b></p>
      <p class="teal-text">Tips to keep in mind</p>
      <ul class="collection">
        <li class="collection-item">
          <p>If you want to lose 1lb per week, subtract 500 calories from this amount</p>
          <p><b>${loseWeight} calories/day -> ${carbsLose}g of carbs, ${proteinLose}g of protein, ${fatLose}g of fat</b></p>
        </li>
        <li class="collection-item">
          <p>If you want to gain 1lb per week, add 500 calories from this amount</p>
          <p><b>${gainWeight} calories/day -> ${carbsGain}g of carbs, ${proteinGain}g of protein, ${fatGain}g of fat</b></p>
        </li>
        <li class="collection-item">
          <p>This part is optional, but to promote an even healthier lifestyle you can keep track of macronutrient intake. Macronutrients are Carbohydrates, Protein, and Fat and they each take up a percentage of the total amount of calories you consume per day. The numbers provided to you come from 50/30/20 split (50% carbs, 30% protein, 20% fat) (This is a very common split).</p>
        </li>
      </ul>
    </div>
  `;
  // Insert HTML into span element
  closeBtn.innerHTML = "&times;";

  // * Append Elements
  // Append close button element to 2nd div (modal-content)
  modalContent.appendChild(closeBtn);
  // Append 2nd div to the intial div created
  div.appendChild(modalContent);
  // Append the new div to the container div
  body.appendChild(div);


  // Event listener to close modal when "x" is clicked
  closeBtn.addEventListener("click", function(e) {
    body.removeChild(div);
    location.reload();
  });

  // Event listener to close when the window outside the modal is clicked
  window.addEventListener("click", function(e) {
    if (e.target === div) {
      body.removeChild(div);
      location.reload();
    }
  });
}


const getCalories = () => {

  // Checks to make sure all input fields are filled out
  if (height.value === "" || weight.value === "" || age.value === "") {
    alert("Invalid entry! Make sure all fields are filled out!")
  }

  // BMR Formula
  const bmr = Math.round((4.536 * weight.value) + (15.88 * height.value) - (5 * age.value));

  // Getting the selected activitiy level
  let selectedActivity = activityLevel.selectedIndex;

  // Switch statement will alter the the value of daily calories based on the the selected activity level
  switch(selectedActivity) {
    case 0:
      console.log("Please make a selection!");
      break;

    // Sedentary
    case 1:
      if (maleRadio.checked) {
        const maleBmr = bmr + 5
        const dailyCalories = Math.round(1.2 * maleBmr)
        generateModal(dailyCalories)

      } else if (femaleRadio.checked) {
        const femaleBmr = bmr - 161
        const dailyCalories = Math.round(1.2 * femaleBmr)
        generateModal(dailyCalories)
      } else {
        alert("Invalid entry! Make sure all fields are filled out!")
      }
      break;

    // Lightly Active
    case 2:
      if (maleRadio.checked) {
        const maleBmr = bmr + 5
        const dailyCalories = Math.round(1.375 * maleBmr)
        generateModal(dailyCalories)

      } else if (femaleRadio.checked) {
        const femaleBmr = bmr - 161
        const dailyCalories = Math.round(1.375 * femaleBmr)
        generateModal(dailyCalories)
      } else {
        alert("Invalid entry! Make sure all fields are filled out!")
      }
      break;
      
    // Moderately Active
    case 3:
      if (maleRadio.checked) {
        const maleBmr = bmr + 5
        const dailyCalories = Math.round(1.55 * maleBmr)
        generateModal(dailyCalories)

      } else if (femaleRadio.checked) {
        const femaleBmr = bmr - 161
        const dailyCalories = Math.round(1.55 * femaleBmr)
        generateModal(dailyCalories)
      } else {
        alert("Invalid entry! Make sure all fields are filled out!")
      }
      break;

    // Very Active
    case 4:
      if (maleRadio.checked) {
        const maleBmr = bmr + 5
        const dailyCalories = Math.round(1.725 * maleBmr)
        generateModal(dailyCalories)

      } else if (femaleRadio.checked) {
        const femaleBmr = bmr - 161
        const dailyCalories = Math.round(1.725 * femaleBmr)
        generateModal(dailyCalories)
      } else {
        alert("Invalid entry! Make sure all fields are filled out!")
      }
      break;

    // Super Active
    case 5:
      if (maleRadio.checked) {
        const maleBmr = bmr + 5
        const dailyCalories = Math.round(1.9 * maleBmr)
        generateModal(dailyCalories)

      } else if (femaleRadio.checked) {
        const femaleBmr = bmr - 161
        const dailyCalories = Math.round(1.9 * femaleBmr)
        generateModal(dailyCalories)
      } else {
        alert("Invalid entry! Make sure all fields are filled out!")
      }
      break;
  }
}

caloriesBtn.addEventListener("click", getCalories)
