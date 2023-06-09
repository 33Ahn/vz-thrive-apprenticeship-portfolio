## Project #2: The-Wizards-Council

Give a high-level overview of the project purpose

#### Describe the application and why you created this program

- The purpose of this project, which was part of the Backend module, was to develop a backend service that enables users to perform CRUD operations on their own spells. The project aimed to provide hands-on experience with RESTful CRUD operations, as well as authentication and authorization processes. Additionally, it involved implementing hashing and JWT (Json Web Token) for enhanced security.

#### Describe the overall structure of your application and the design process prior to building the program

- The design process involved creating the necessary endpoints for each CRUD operation (create, read, update, delete) and defining their corresponding routes.

- For user login and hashing, a secure password hashing algorithm was implemented to ensure the confidentiality of user credentials.

- Authentication and authorization were implemented using JSON Web Tokens (JWT), where users were issued tokens upon successful login, and these tokens were used to verify their identity and permissions for accessing protected resources.

#### Explain the code you wrote to achieve your desired result

- To achieve the desired result, I created an asynchronous middleware function called 'authUser'. It takes in 'req', 'res', and 'next' parameters to handle user authentication. First, I retrieved the 'Authorization' header from the request, checking its existence. If it doesn't exist, I sent a message indicating the user isn't authorized and passed control to the next middleware or route handler. If the header exists, I extracted the token, checking for its presence. If the token is missing, a 401 status code is returned, indicating the need for valid credentials. I then used 'jwt.verify()' to validate the token using the provided secret. If the token is invalid or expired, a 403 status code is returned. Finally, I used 'next()' to pass control to the next middleware or route handler in the chain.

#### Showcase your final application with its functionality

- Users have the ability to perform various operations on spells within the application, such as reading, adding, deleting, and editing spells stored in the database. The login functionality ensures that passwords are securely hashed and salted before being saved to the database. Additionally, prospective users can sign up for the API, and once registered, they can be granted authorization to access and utilize the API's functionalities.

#### Include relevant screenshots ( Postman screen shots)

  ![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/a9d81bbe-da93-43de-99dd-76e037db24e7)
  ![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/3657d97c-8019-4ccf-90aa-feb877b7e033)
  ![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/ff73d2f9-ad5f-455d-aef8-cd9166f02840)
  ![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/22dcfc08-5db9-4b0f-9fca-840cff665b63)
  ![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/e6d8d0d5-f4ab-4e98-a1ab-2e941072522e)

## Technologies

- Tech Stack
    - Node: 18.16.0
    - Express: 4.18.2
    - sequelize: 6.26.0,
    - sqlite: 4.1.2,
    - sqlite3: 5.1.2

- Include dependencies and versions
    - bcrypt: 5.1.0,
    - dotenv: 16.0.3,
    - http-errors: 2.0.0,
    - jsonwebtoken: 8.5.1,
    - remixicon: 2.5.0

- Note any deployment ot testing tools as well

   - Render https://the-wizards-council.onrender.com/wizards
   - Postman


## Competencies

JOB FUNCTION 3: Apply the process of server-side development, including explaining algorithms, logic and data structures, can develop and maintain databases and codebases, and explain and implement APIs

- JF 3.6 Can implement a RESTful API

    - To implement a RESTful API, I utilized the HTTP request verbs such as GET, POST, PUT, and DELETE, ensuring that the corresponding routes followed a consistent naming convention using plural nouns in the URLs.

    - Additionally, I leveraged query strings to assign values to specific parameters in routes, enabling me to create more specific routes. Query strings were formed by appending a question mark followed by key-value pairs separated by equal signs, and multiple key-value pairs were separated by ampersands.

- JF 3.7 Can implement authentication and authorization to an API

    - To implement authentication and authorization in the API, I utilized user authentication by verifying their identity through their username and password. Once authenticated, I performed authorization by checking if the provided password matches the stored values. Upon successful authentication and authorization, I generated a JSON Web Token (JWT) that granted users continued access to the API without the need to repeatedly log in. This streamlined the user experience and ensured secure access to the API's resources.

- JF 3.8 Can encrypt sensitive data via hashing

   - To encrypt sensitive data via hashing, I implemented a salting technique where a random string was added to each user's password, ensuring uniqueness even for identical passwords. Subsequently, I applied a secure hashing algorithm like bcrypt to transform the plain text password into an unintelligible series of characters, making it indecipherable and irreversible, even with the knowledge of the hashing algorithm. This ensured the utmost security and protection for the stored passwords.

## Installation

After you clone this repo, run 
- `npm install` which will read the package.json file, resolve the dependencies, and install them in the node_modules directory of your project. Therefore, there is no need to manually install each package individually if they are already listed in the package.json file. 

- `npm start` to run the server

#### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file.
- `ACCESS_TOKEN_SECRET`
- `PORT`


#### Tier 1 — MVP Application - CRUD and REST 👨🏽‍💻
<details>

   ✨ As a User, I want to read 📔 ```spells``` from the database

   ✨ As a User, I want to add ```spells``` to the database

   ✨ As a User, I want to delete ```spells``` from the database

   ✨ As a User, I want to edit ```spells``` in the database

   ✨ As a User, I expect to do all of the above by accessing RESTful routes

   ✨ As a User, I want to log in to a deployed app.

         *  🚩 Deployed app <https://the-wizards-council.onrender.com/wizards>

</details>


#### Tier 2 — Login, Hashing
<details>

  ✨ As a User, I want to be able to log in to my API

  ✨ As a User, I want any passwords saved to be hashed and salted before saved to the database (note: If you use OAuth, you might not even store passwords at all!)
</details>

####  Tier 3 — Register
 <details>

  ✨ As a potential User, I want to be able to sign up for the API

  ✨ As a signed-up User, I want to be granted authorization to access the API
</details>

#### Tier 4 — Authorization
<details>

 ✨ As a User, I want my API protected from unauthorized Users 🙅

 ✨ As an unauthorized User, I want a helpful message telling me I do not have access to the API

 ✨ As a user, I want to receive a helpful error message anytime there is a problem with the request (i.e. error handling middleware)

 ✨ As a User, I expect not to be able to create new entities without first logging in / authenticating in some way (token/session)

 ✨ As a User, I want my data to only be accessible by myself

 ✨ As a User, I want my data to only be editable/deletable by myself
</details>

#### Tier 5 — Associated Data
<details>

 ✨ In addition to the Tier 1 MVP criteria…

 ✨ As a User, I want to be able to read a single entry

 ✨ As a User requesting a single entry, I want to see the associated user info and other associated data.
</details>

#### Tier 6 — Admin🔑 vs User💁
  <details>

 ✨ 🔑 As an Admin, I want to have a special super-user account type that allows access to content Users don’t have access to

 ✨ 💁 As a basic User, when requesting a list of all ```spells```, I expect to only see my own ```spells``` (not ```spells``` of other users)

 ✨ 🔑 As an Admin, when requesting a list of all ```spells```, I expect to be able to see all ```spells```, regardless of user/owner

 ✨ 🔑 As an Admin, I want to be able to edit other users’ information via the API

 ✨ 🔑 As an Admin, I want to be able to delete or edit any entity, regardless of user/owner
  </details>

#### 🎯 Bonus Goals 🎯
<details>

* 🎯 Bonus Goal 1: Front End Login
   * As a User, I want to be able to use a client-side form to Log in/out of my application.
   * As a User, I want to be able to sign up using a client-side form. This could be via a traditional web form, or more preferably, with a React app.

* 🎯 Bonus Goal 2: Seed
   * As a Developer cloning the repo for the first time, I want to be able to run a seed command and have the database populated with data.
   * As a Developer, I want multiple users to be seeded to the database

* 🎯 Bonus Goal 3: Testing
   * As a Developer, I want to be able to run a test commend (such as npm test or the command specific to your technology/project) and have all my tests run.
   * As a Developer, I want to know if my new code has broken anything (passing tests means it theoretically didn’t)

* 🎯 Bonus Goal 4: Continuous Integration
   * As a Developer, I want the tests to run each time I open a PR to the main branch.
   * As a Developer, I want failing tests to block a merge to main
 Note: GitHub Actions or TravisCI are each great options for this.

* 🎯 Bonus Goal 5: Pagination
   * As a Developer, I want to see many (Hundreds? Thousands?) ```spells``` seeded to use in testing. (Use an external package like faker to generate the data)
   * As a User requesting all ```spells```, I want to receive paginated data (10 results instead of 5K)
   * As a User requesting all ```spells```, I want to be able to request the next “page” or set of data
   * As a User requesting all ```spells```, I want to be able to edit the page size (10 results at a time vs 50 or other amount)

* 🎯 Bonus Goal 6: External API Automation
   * You could integrate external API for cool and fun functionality.
   * Intermediate - As a User signing up, I want to receive an email confirmation upon registration.  Use something like SendGrid - (100 free emails per day)
   * Advanced - As an Admin, I want to receive a daily email report with data about my entities (inventory value, daily throughput, etc).  I expect the report to come in at the same time every day.  You could achieve this by creating an interval-based Cron Job, running on a serverless host like Google Cloud or AWS Lambda.

* 🎯 Bonus Goal 7: Front End Application

  * As a User, I want to access, create, edit, and delete my data all from a front-end GUI application.

  * As a returning user, I want to be automatically logged in, instead of having to enter my credentials each time I revisit the application.

  * As a User, I want my app to be visually stunning

</details>
