# FitGuide

## Description

- This is a website dedicated to helping people who are new to lifting weights and have no idea where to start.
- Page organization:
  - Home Page
  - About Page
  - Calorie Calculator Page
  - Recipe/Food-Item Search
  - Workout Template/Resources Page

## Screenshots

<p class="center">
  <img src="/assets/pictures/readme-photos/home-page.png">
</p>
<p class="center">
  <img src="/assets/pictures/readme-photos/calculator-page.png">
</p>
<p class="center">
  <img src="/assets/pictures/readme-photos/modal.png">
</p>
<p class="center">
  <img src="/assets/pictures/readme-photos/recipe-page1.png">
</p>
<p class="center">
  <img src="/assets/pictures/readme-photos/recipe-page2.png">
</p>
<p class="center">
  <img src="/assets/pictures/readme-photos/resources-page1.png">
</p>
<p class="center">
  <img src="/assets/pictures/readme-photos/resources-page3.png">
</p>

## Key Features

- **Calorie Calculator** - This form takes the user's gender, height weight, age, and activity level. Once the user clicks the submit button, the inputs will then be inserted into a BMI formula and invoke specific set of conditionals based on the user's choices for gender and activity level. The conditonal set invoked will then calculate the Daily Calorie intake for the user. This value is then passed to a function that generates a modal. The calorie value is then passed into a few more formulas to calculate: Maintenance Calories, Weight Gain Calories, Weight loss Calories, and the Macronutrient Intake (carbs, protein, and fat) of each calorie value. The modal will then be displayed on screen with the calculated values passed in as well as some general tips for the user.

- **Recipe/Food-Item Search** - This feature has two search fields, one for finding different types of recipes and the other for finding specific food items. Whenever a search is made one of the fields, an asynchronous function call is made and will fetch data from the specific API used in the function. The Recipe Search fetches from Spoonacular API, converts that data to JSON format and then generates a list of 20 items. Each list item will give a summary of the dish as well as a picture, prep time, nutritional info, and a link to the full recipe. The Food-Item Search essentially does the same thing but isn't as robust. This is another asynchronous function that pulls from the USDA's API, converts the data to JSON and displays the nutritional information of the item in a small card.

## Technologies Used

**Built with**:

- JavaScript
- Materialize CSS
- CSS
- HTML

## What was learned

- Asynchronous Programming
  - Learned how to properly implement Async/Await in a function.
  - Understand how Async/Await eliminates the need to deeply nested callbacks.
- Using the Fetch API
  - Learned how to interpolate user inputs into an API call to get back specific data.
- Using a CSS framework as well as plain CSS in unison
  - This project has shown me that CSS frameworks have their limitations and can also restrict creative freedom. But this experience has shown me new ways to work around these limitations to get the desired result.
- Gained a better understanding of Materialize CSS
  - Learned the specific naming conventions for their components as well as how to layout page properly using Materialize.
