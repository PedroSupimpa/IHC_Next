Overview
This repository contains the code for my college project on Human-Computer Interaction (IHC). The project utilizes Next.js and TypeScript to demonstrate how Next.js works, how TypeScript is integrated, and the overall structure of the project components. The application fetches data from the Pokédex API, utilizes interfaces to handle the data, and displays information about 6 different Pokémon on the screen.

Table of Contents
Project Name
Overview
Table of Contents
Getting Started
Prerequisites
Installation
Usage
Project Structure
Technologies Used
API Reference
Contributing
License
Getting Started
Prerequisites
Make sure you have the following software installed on your system:

Node.js (at least version X.X.X)
npm or yarn
Installation
Clone this repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/your-project.git
Navigate to the project directory:
bash
Copy code
cd your-project
Install the dependencies:
bash
Copy code
npm install
# or
yarn install
Usage
To run the project locally, use the following command:

bash
Copy code
npm run dev
# or
yarn dev
This will start the development server, and you can access the application in your web browser at http://localhost:3000.

Project Structure
The project's file structure is organized as follows:

lua
Copy code
your-project/
|-- components/
|   |-- Component1.tsx
|   |-- Component2.tsx
|   |-- ...
|-- interfaces/
|   |-- Interface1.ts
|   |-- Interface2.ts
|   |-- ...
|-- pages/
|   |-- index.tsx
|   |-- ...
|-- styles/
|   |-- style1.css
|   |-- style2.css
|   |-- ...
|-- public/
|   |-- ...
|-- ...
|-- package.json
|-- tsconfig.json
|-- ...
components: This directory contains all the React components used in the project.
interfaces: Here, you'll find TypeScript interfaces that define the shape of the data received from the Pokédex API.
pages: Next.js automatically routes files placed in this directory to their respective URLs.
styles: CSS files for styling components.
public: Static assets like images or fonts can be placed here.
Technologies Used
Next.js
TypeScript
React
CSS (or any other styling method used)
API Reference
The project fetches data from the Pokédex API. For more information on the API and its endpoints, refer to the official documentation: Pokédex API Documentation

Contributing
Contributions to this project are always welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the established coding conventions and commit message guidelines.

License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.
