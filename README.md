# Pregnancy Wheel Client


This project aims to help midwife ultrasound technician to manage his patients.
A pregnancy wheel is used to compute key dates in pregnancy like pregnancy term.


This project is a POC so there is still a lot to do and improve.


## Installation

You must have a NodeJS environement to run this project.
First, install dependencies :
```
npm i
```
To run this app in development mode :
```
npm run dev
```

To build app in production mode and launch it in local environment, run :
```
npm run build
npm run preview
```

## TODO

- [ ] Setup tests : with Jest library and fast-check to use Property Based Testing. First, the goal is to test behavior in reducers. We can use redux-loop simulating to develop our tests : [Redux-loop simulating](https://redux-loop.js.org/docs/tutorial/Testing.html)

- [ ] Improve User Interface : I focused on functionality first.

- [ ] Improve React/Redux architecture : For example, I used containers and hooks to select an entity on global state, I need to choose between these two approachs.

- [ ] Improve CI/CD

- [ ] Develop an interface to upload images

- [ ] Develop an interface of messaging between patient and a professional



## Author

Quentin Burg