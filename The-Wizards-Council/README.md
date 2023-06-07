# The Wizards Council

``` 
To access server, install the following
npm install 
npm install sqlite3
npm install express
npm install sequelize
npm start -dev
npm start client -server
```

# Tier 1 — MVP Application - CRUD and REST 👨🏽‍💻
<details>

   ✨ As a User, I want to read 📔 ```spells``` from the database  

   ✨ As a User, I want to add ```spells``` to the database 

   ✨ As a User, I want to delete ```spells``` from the database 

   ✨ As a User, I want to edit ```spells``` in the database 

   ✨ As a User, I expect to do all of the above by accessing RESTful routes 

   ✨ As a User, I want to log in to a deployed app.

         *  🚩 Deployed app <hyperlink> goes here 

</details>

  
# Tier 2 — Login, Hashing
<details>
  
  ✨ As a User, I want to be able to log in to my API
  
  ✨ As a User, I want any passwords saved to be hashed and salted before saved to the database (note: If you use OAuth, you might not even store passwords at all!)
</details> 

#  Tier 3 — Register
 <details>
  
  ✨ As a potential User, I want to be able to sign up for the API
  
  ✨ As a signed-up User, I want to be granted authorization to access the API
</details> 

# Tier 4 — Authorization
<details>
 
 ✨ As a User, I want my API protected from unauthorized Users 🙅
 
 ✨ As an unauthorized User, I want a helpful message telling me I do not have access to the API
 
 ✨ As a user, I want to receive a helpful error message anytime there is a problem with the request (i.e. error handling middleware)
  
 ✨ As a User, I expect not to be able to create new entities without first logging in / authenticating in some way (token/session)
 
 ✨ As a User, I want my data to only be accessible by myself
 
 ✨ As a User, I want my data to only be editable/deletable by myself
</details>

# Tier 5 — Associated Data
<details>

 ✨ In addition to the Tier 1 MVP criteria…
 
 ✨ As a User, I want to be able to read a single entry
 
 ✨ As a User requesting a single entry, I want to see the associated user info and other associated data.
</details>

# Tier 6 — Admin🔑 vs User💁
  <details>

 ✨ 🔑 As an Admin, I want to have a special super-user account type that allows access to content Users don’t have access to 
 
 ✨ 💁 As a basic User, when requesting a list of all ```spells```, I expect to only see my own ```spells``` (not ```spells``` of other users) 
 
 ✨ 🔑 As an Admin, when requesting a list of all ```spells```, I expect to be able to see all ```spells```, regardless of user/owner
 
 ✨ 🔑 As an Admin, I want to be able to edit other users’ information via the API
 
 ✨ 🔑 As an Admin, I want to be able to delete or edit any entity, regardless of user/owner
  </details>

# 🎯 Bonus Goals 🎯
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
