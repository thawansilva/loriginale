# L'Originale

A React + Firebase Project that allows the employees of a Pizzeria to make pizza orders, delete and/or change the status of the order.

<img src="./assets/logIn.png" alt="A image showing the log in page of the project, the logo is on the left with a red background and the log in form with the email and password inputs are on the right."/>

<img src="./assets/homePage.png" alt="Image of the home page, the navbar is on top with the logo image on the left and the dark mode and sign out button is on the right, the main section contain the order section where the person put the informations of the order, and the orders section where it shows the orders that were asked."/>

## Features

- Log in/Register account with Firebase Auth and React Firebase Hooks
- Adding orders and storing them in Firebase Firestore and React Firebase Hooks
- Filter the orders by their status.
- Delete orders and/or change their status
- Responsive design
- Dark Mode

## Languages and tools

- Typescript (^4.9.3)
- React (^18.2.0)
- TailwindCSS (^3.2.7)
- Firebase (^9.18.0)
- Vite (^4.2.0)
- React Firebase Hooks (^5.1.1)
- Figma

### Setup

1. Create an account on Firebase and get your Firebase Config.
2. In the root of the project create a `.env` file for storing firebase secrets:

   ```env
   VITE_API_KEY    VITE_FIREBASE_AUTH_DOMAIN =
   VITE_FIREBASE_PROJECT_ID =
   VITE_FIREBASE_STORAGE_BUCKET =
   VITE_FIREBASE_MESSAGING_ID =
   VITE_FIREBASE_APP_ID =
   ```

#### Requirements

- NodeJS
- NPM

```

/* Install the needed packages */
npm install

/* To run the application */
npm run dev

/* Open the local host */
o

```

<p align="center">
<sub>A project by <a href="http://thawan.netlify.app/">Thawan Silva</a></sub>
</p>
