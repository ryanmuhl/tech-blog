# Tech Blog

- [Purpose](#purpose)
- [Website Functionality](#website-functionality)
- [Criteria Met](#criteria-met)
- [Built With](#built-with)
- [Installation Instructions](#installation-instructions)
- [GitHub Repository](#github-repository).
- [Screenshot](#screenshot)
- [Contributions](#contributions)


## Purpose
Create application so that a future employer can view my deployed React portfolio of work samples  so that they can assess whether I am a good candidate for an open position.

## Website Functionality
* GIVEN a CMS-style blog site
* WHEN I visit the site for the first time
* THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option * to log in
* WHEN I click on the homepage option
* THEN I am taken to the homepage
* WHEN I click on any other links in the navigation
* THEN I am prompted to either sign up or sign in
* WHEN I choose to sign up
* THEN I am prompted to create a username and password
* WHEN I click on the sign-up button
* THEN my user credentials are saved and I am logged into the site
* WHEN I revisit the site at a later time and choose to sign in
* THEN I am prompted to enter my username and password
* WHEN I am signed in to the site
* THEN I see navigation links for the homepage, the dashboard, and the option to log out
* WHEN I click on the homepage option in the navigation
* THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
* WHEN I click on an existing blog post
* THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* WHEN I enter a comment and click on the submit button while signed in
* THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* WHEN I click on the dashboard option in the navigation
* THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
* WHEN I click on the button to add a new blog post
* THEN I am prompted to enter both a title and contents for my blog post
* WHEN I click on the button to create a new blog post
* THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
* WHEN I click on one of my existing posts in the dashboard
* THEN I am able to delete or update my post and taken back to an updated dashboard
* WHEN I click on the logout option in the navigation
* THEN I am signed out of the site
* WHEN I am idle on the site for more than a set time
* THEN I am able to view comments but I am prompted to log in again before * can add, update, or delete comments

## Criteria Met
* When user loads site.  Main Page Loads with link to home and Login at top.
* When user selects login,  they are directed to page instructing them to log in.  
* If a user needs to sign up,  link at bottom of page will re direct to sign up page.
* When a user Logs in,  they are directed to main user page with links for Dashboard and Logout.
* If a user selects Logout,  they will be logged out and re directed to the main page.
* If a user selects Dashboard,  they will be taken to a Dasboard page 

* This site is not completed and many of the features are not yet functional.  Basic log in and log out and page routing is working properly.

## Dependancies 
* bcrypt
* sequalize
* express
* express-handlebars
* mysql2

## Installation Instructions
* Run NPM install in Main
* Navigate to http://localhost:3000/ in browser

## GitHub Repository
https://github.com/ryanmuhl/tech-blog

## Heroku
* To be deployed to Heroku at later date

## Screenshot
![Challenge Screenshot](https://github.com/ryanmuhl/greater-purpose/blob/main/public/images/Screenshot.png.jpg)

## Contributions
Created/Designed by:
* Email: ryanmuhl@hotmail.com
Assisted by: Daniel Ringenbach (Tutor)