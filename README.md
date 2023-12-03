# react-ecommerce

This application is a mock-up of an ecommerce website built in react, which fetches product information stored in a Firestore document database.

---

## Requirements / Purpose

The purpose of this project was to show that I could put into practice a number of concepts covered in class such as using firestore to implement a document database, and using routing within a React applciation.

---

## Build Steps

To run this React application on your local machine, make sure you're in the google-books-api directory in the terminal and run the following commands:

```console
npm install
```

```console
npm run dev
```

You should then see the word Vite and a list of commands in your terminal.
If the application doesn't automatically open in a browser window, you can either:

- Copy the url after "local:" into your browser, or
- type "o" into your terminal and press enter

The application should then start running in your browser window.

---

## Features

This application has the following features: 
-   API calls to a Firestore database of products
-   Navigation using react-router-dom
-   Auto-generation of product pages based on database queries

---

## Future Goals

My main goal with this project is to improve it dramatically in terms of looks and functionality. 
I recently encountered some issues with the way Firebase/Firestore handle permissions, which means I had to disable some of the more advanced functionality of the site. I am currently working on a work-around which should make the site both look and function better - through doing this, I aim to significantly restructure the code.

In future, I would also love to add search and filter functions for product categories, and add pagination based on search results.
