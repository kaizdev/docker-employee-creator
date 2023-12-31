# Employee Creator - Full Stack

-   Ensure you have Docker and Docker compose installed on your machine - [Get Docker](https://docs.docker.com/get-docker/)
-   Navigate to the root folder of `employee-creator-appp`. You should see the folder for employee-backend and employee-frontend along with the docker-compose.yml file
-   Spin up the Docker container by running `docker compose up -d`. This will start up the React/Vite front end, the Java/Springboot backend, as well as the mySQL server
-   Access the front end by going to http://localhost:5173/
-   Once you're done with the container, you can remove it by running `docker compose down`

## Demo & Snippets

-   Include hosted link
-   Include images of app if CLI or Client App

---

## Requirements / Purpose

-   MVP:
    -   Spring RESTful API and React Typescript frontend
    -   3 API end points (create employee, list of existing employees and delete employee)
-   Web app to create, list, modify and delete employees
-   Stack:
    -   Front end: Vite, React, TypeScript, Tailwind
        -   Front end dependencies include:
            -   @hookform/resolvers
            -   @phosphor-icons/react
            -   react-dom
            -   react-hook-form
            -   react-router-dom
            -   yup
    -   Back end: Java and Spring

---

## Build Steps

This is the dockerised version of employee creator app. Use the docker instructions above to launch

---

## Design Goals / Approach

-   I wanted the design to be minimalistic and provide only the necessary information
-   This design was chosen as it is easy to use and user friendly

---

## Features

-   The project is a working full stack application to add, modify and delete employees from a database
-   Create new employee form is created through React Hook Form and Yup validation
-   Icons are from Phosphor icons

---

## Known issues

-   N/A

---

## Future Goals

-   Additional styling and visual uplift

---

## Change logs

-   Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the day. Be specific about the changes that have happened for that day.

### 22/08/2023 - {Initial Commit and back end MVP}

-   Implemented the Spring back end with working CRUD
-   Added React / TS front end to get all employees
-   Added tailwind

### 30/08/2023 - {Added create new employee functionality for front end}

-   Implemented the create new employee form for the front end
-   Form validation added via yup resolver

### 31/08/2023 - {Added update functionality and styling to front end}

-   Implemented updating of employees form for the front end
-   Added button styling and icons

---

## What did you struggle with?

-   First repo that I have created using TypeScript for the front end
-   This was also the first project I have created using Tailwind for CSS (previously have used SCSS). Tailwind has a lot of new syntax to learn however I can see the potential efficiencies and use cases for Tailwind as it removes bespoke CSS code

---

## Licensing Details

-   Free for non-commercial use

---
