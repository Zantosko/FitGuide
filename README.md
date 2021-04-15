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
