# J.A.B 
Welcome to 'Just A Blog', a MERN  fullstack project containing a user use case
and also an admin use case(coming soon feature).


## Situation

J.A.B is a deployed, full stack application, where the main idea is that users can create posts, upload images, view other users posts and modify their posts.
As title suggests... it's "just a blog"😉 


## Task

The project fulfill Job function 1 through 6 as a fullstack app, using MERN stack.
The folder structure contains 4 main parts:
- github/workflow
- client
- server
- docker-compose.yml

Includes the following competencies:
- JF 1.1	Can explain all stages of the software development life cycle (what each stage contains, including the inputs and outputs)
- JF 1.5	Can work effectively and contribute appropriately on a team to produce software
- JF 1.6	Can follow software designs and functional/technical specifications				
- JF 1.7	Can follow company, team or client approaches to continuous integration, version and source control
- JF 2.3	Can develop effective user interfaces				
- JF 2.4	Can create simple software designs to effectively communicate understanding of the program				
- JF 3.2	Can explain the principles and uses of relational and non-relational databases				
- JF 3.3	Can link code to data sets	
- JF 3.6	Can implement a RESTful API		
- JF 4.3	Is able to build, manage and deploy code into the relevant environment
- JF 5.1	Knows relevant and up-to-date software testing frameworks and methodologies			
- JF 6.2	Understands how to follow company, team or client approaches to continuous integration, version and source control				
- JF 6.4	Works independently and takes responsibility. For example, has a disciplined and responsible approach to risk, and stays motivated and committed when facing challenges				
- JF 6.6	Shows initiative for solving problems within their own remit, being resourceful when faced with a problem to solve				
- JF 6.7	Communicates effectively in a variety of situations to both a technical and nontechnical audience.																												


## Action

 I served as both frontend and backend developer and played a key role in designing the application's user interface and overall user experience, aiming to develop a user-friendly web application with features like image uploading, ability for a user to 'login/register', create-read-update-delete a post as a user.
 Throughout the project, my colleague(Bryan) and I worked together as a pair, ensuring constant communication and code review to maintain high coding standards, refactoring where necesary.
 I was responsible for the entire frontend, and regarding the backend I have created the folder structure, established connection to MongoDB database, set up 'posts' schema, 'postController', implemented the 'errorMiddleware'.
 Worked collaborated with Bryan on the backend for 'usersController'.
## Result 

- [J.A.B App](https://blog-client-io30.onrender.com/)



## Features

USER
- able to login/register
- able to use CRUD (CREATE post, UPDATE post, DELETE post, VIEW self posts)

ADMIN
- able to login/register
- able to see total number of users/posts
- able to see user info  
- able to delete user    

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file(ask one of the admins😎)
- `PORT`
- `MONGO_URI`
- `JWT_SECRET`

## Installation

You have two choices in running this app:
- 1. using npm
- 2. using Docker


#### Using npm

git clone https://github.com/Akatsuki-Clan/blog.git


```bash backend
from root cd server - install dependencies
    npm install
    add environment variables values in .env(create the folder in root - server folder)
    npm run server(nodemon included😉)
```

```bash frontend
from root cd client - install dependencies
    npm install
    npm run dev
```

#### Using Docker
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
```
from this project's root directory, run the following command:
    docker-compose up
```

### Authors
- [@adrianbaltag](https://github.com/adrianbaltag)
- [@bryan99pham](https://github.com/bryan99pham)


### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Typography - light theme | ![#495057](https://via.placeholder.com/10/0a192f?text=+) #495057 |
| Typography - dark theme | ![#ff922b](https://via.placeholder.com/10/f8f8f8?text=+) #ff922b |
| Accent color - light theme | ![ #adb5bd](https://via.placeholder.com/10/00b48a?text=+)  #adb5bd |
| Accent color - dark theme | ![#ffc995](https://via.placeholder.com/10/00b48a?text=+) #ffc995 |
| Background color - light theme | ![- bg #f8f9fa
](https://via.placeholder.com/10/00b48a?text=+) - bg #f8f9fa
 |
| Background color - dark theme | ![#1a1a1a](https://via.placeholder.com/10/00b48a?text=+) #1a1a1a |


### Appendix

Aditional info regarding the requirements of building the app:


#### Tier 1 — MVP Application - UI


- Essential components have been incorporated and laid out on the page.

- User is able to navigate through the page using necessary routes.

- User interface is thoughtfully designed.
- As a user, I want the app to have a nice UX, so that I can be happy and enjoy my time using the app.
- As a user, I want to see the data nicely organized, so that I can consume and interact with it. 

#### Tier 1 - Application MVP Back End

- As a user, I want to read entries from the database

- As a user, I want to add entries to the database

- As a user, I want to delete entries from the database

- As a user, I want to edit entries in the database

- As a user, I expect to do all of the above by accessing RESTful routes

#### Tier 2 - Deployed Application via Continuous Deployment

- Set up continuous deployments so that the application is deployed upon push/merge to main.
- Create a GitHub Workflow file for GitHub Actions and/or other necessary files.

#### Tier 3 - Continuous Integration

- Create a Branch Protection Rule to run the tests upon Pull Requests to the main branch. 

- Upon successful test runs, Github Actions should deploy the application.

#### Tier 4 - Login, Register, and Authentication

- As a user, I can create a new account with my information saved in a database.


- As User B, I should not have access to User A’s private data (i.e. profile information, unpublished blog posts, private images…)

- Allow only authenticated users to access the private/profile/sharing portion of the application.

- Allow unauthenticated users to access other pages (like a welcome screen, or list of public posts)

#### Tier 5 - Admin vs User & Further Security Implementations

- Create an admin setting that gives different controls to certain users of your application.

- Protect your app against OWASP Top 10.


#### Acknowledgements 🙌

 - [Awesome Readme Templates](https://readme.so/editor)
