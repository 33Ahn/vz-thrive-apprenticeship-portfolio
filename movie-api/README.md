## Project #1: movie-api

### Give a high-level overview of the project purpose

#### Describe the application and why you created this program

- The purpose of the project was to create a movie API that allows users to search for movies, view movie details, and manage their movie watchlist. This project was part of the Frontend module and aimed to familiarize ourselves with API usage.

#### Describe the overall structure of your application and the design process prior to building the program

- Before building the program, the overall structure of the application was planned and designed. This involved determining which movie data API sites we would use, API endpoints based on what we want to show, and user interface components. Wireframes were created to visualize the application's layout and functionality.

#### Explain the code you wrote to achieve your desired result

- To achieve the desired result, I initialized the application using a JavaScript library, React, to build the user interface components, including search box, movie cards, navigation, and movie details.

- Also, deployed the application on Netlify to be accessible to users from anywhere, providing them with a platform to interact with the application and experience its functionalities

#### Showcase your final application with its functionality

- The final application showcased full functionality, allowing users to search for movies by title, view detailed information about each movie, and add movies to their watchlist. The user interface provided an intuitive and user friendly experience, making it easy for users to navigate and interact with the application.

## Include relevant screenshots

![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/0ff881d9-ce26-4bc2-9388-7c3ec47e706a)

![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/35f9774a-dade-414c-a16b-c5a0df9d3a98)

![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/56148aa0-b2db-42eb-845f-34a08d0882cc)

![image](https://github.com/33Ahn/vz-thrive-apprenticeship-portfolio/assets/87917443/3754c753-2ce1-4246-b32e-b2d530ffbc2a)



## Technologies

- Tech

  - React: 18.2.0
  - React-Bootstrap: 2.7.4
  - Bootstrap: 5.2.3

- Include dependencies and versions

  - axios: 1.4.0,
  - react-dom: 18.2.0,
  - react-router-dom: 6.11.1

- Note any deployment tools as well

  - Netlify

  - https://main--tourmaline-empanada-87bfb4.netlify.app

## Competencies

JOB FUNCTION 2: Take a business or user problem, gather data to analyze the problem, and
use prototyping tools to create a high fidelity wireframe and UI framework, test the application, and use agile project management

- JF 2.4 Can create simple software designs to effectively communicate understanding of the program

  - The project started with wireframes that were created by our team, outlining the desired layout and functionality of the application. To effectively translate these wireframes into user interfaces, I began by analyzing each wireframe and breaking it down into its core components, and communicated with our team to share our thoughts and ideas.

- JF 2.6 Can translate wireframes into User Interfaces

  - Once the software design was complete, I began implementing the user interfaces based on the design using React. I utilized JSX syntax, CSS styling, and JavaScript to build the necessary components, ensuring they closely matched the wireframes that our team created.

JOB FUNCTION 4: Manage and deploy applications and programs, conduct testing, and adhere to industry security standards

- JF 4.3 Is able to build, manage and deploy code into the relevant environment

  - Upon opening an account on Netlify, I proceeded to deploy a React application to a live server. This involved configuring the necessary settings and connecting the application to the Netlify platform.

  - By leveraging the features provided by Netlify, I was able to seamlessly deploy the React application to a live server environment.

  - The deployment process involved uploading the codebase to Netlify, configuring build settings, and triggering the deployment process. Netlify handled the build and deployment tasks, ensuring that the application was properly built and optimized for production.

## Installation

After you clone the repo, running ` npm install ` will install both the dependencies listed under "dependencies" and the development dependencies listed under "devDependencies", and both types of dependencies will be installed in the project's node_modules directory.

Development dependencies are typically used for development and testing purposes, while regular dependencies are required for the application to run in production.

- ` npm install `

- ` npm start ` to run the server


#### Tier 1 — MVP Application - Index page (or Home page) with Styled Components (CSS Framework)

<details>

Fetch a list of things and display them nicely using a CSS Framework of styled Components.

- As a user, I want to see the data nicely organized, so that I can consume and interact with it.

- As a user, I want the app to have a nice UX, so that I can be happy and enjoy my time using the app.

</details>

#### Tier 2 — Client-Side Routing

<details>

Implement routing to access different pages in the application. It’s ok if there’s no Nav bar yet, that can be handled in a later tier

- As a user, I want to see the URL change as I move through different parts of the application, so that I can bookmark my favorite page and share it with friends.

- As a user, I want the app to be dynamic and interactive, so that I can enjoy my time using the app.

- As a user, I want the app to dynamically and quickly swap the content out on the page when I’m navigating to another section of the app, so that the page doesn’t refresh and it feels like a better and faster experience.

</details>

#### Tier 3 — Dynamic Routes - Show Page

<details>

Add nested routes using query params e.g. /cats/:name and render a Show page (or, details page, etc.) about that specific queried thing. (i.e. /cats/fluffykins should show all the details about the cat named fluffykins).

- As a user, I want to view details about a single thing, so that I can learn more about it.

- As a user, I want the URL to change to include the thing I’m looking at, so that I can bookmark the page and share it with friends.

</details>

#### Tier 4 — Global State & Search/Filter

<details>

Store some data globally in state (i.e. context) and share it between multiple components. i.e. user enters input in one component and the value from the input is used elsewhere to filter a list. This is purely a “behind-the-scenes” piece of functionality, and it’s difficult to write a user story for how this works, but here’s an example of how that could work.

- As a user entering a value in an input, I want the list of things to be filtered based on the value I entered.

</details>

#### Tier 5 —  Navigation (Nav Bar)

<details>

Since we should already have multiple routes and navigation functionality, let’s add an app-wide Nav bar to connect those routes.

- As a user, I want to see a convenient and user-friendly Nav bar, so that I can easily navigate my way around the app.

</details>

#### Tier 6 — Unit Tests

  <details>

Implement Jest & Testing-Library/React (or appropriate framework) unit tests for components.

Verify components are rendering as expected, dynamic components update accordingly, modifying props changes functionality, etc

  </details>

#### Tier 7 - Accessibility

<detail>

Using the Lighthouse feature of Chrome-based browsers, verify your Accessibility is in the Green!

</detail>

#### Bonus Goals

<detail>

Implement a Theme & Dark Mode toggle switch to allow users to customize the look of the app.

</detail>
