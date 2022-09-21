# DOCTOR APPOINTMENT APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the backend packages.\
In the root folder, create a `.env` file

## `.env`

- MONGO_URL = (paste your uri here)
- PORT = 5000
- JWT_SECRET = 1234567890

### `cd client` to the frontend directory

### `npm install`

To install all the frontend packages.\

## How to run the project

### Backend

- on the root folder, run `npm start`

### Frontend

- on the root folder, `cd client` , then `npm start`

## Languages Used

### Frontend

- Reactjs
- Ant design
- remix icons
- css

### Backend

- NodeJs for creating Api
- MongoDb for the database
- jwt for authentication

## DESCRIPTION

Doctor Appointment App is a platform where different users can apply for an appointment with the available doctor.\

- I wanted to create a CRUD app so that I can practice my fullstack skills I have learned so far.\
- This project is a perfect example for a CRUD app since it brings all the aspect to use.\
- The app solves the headache of finding a perfect doctor to visit for your health issue.\
- I learnt how backend and frontend interact with each other, how to create a REST API, how to design front-end with `ant design` .

## Overview

The project has 3 users.

- admin
- doctor
- user(patient)

## admin role

- admin approves/reject doctor's request to be listed in the doctor's list.

<img src="/images/admin.png" alt="admin-dashboard" style="height: 300px; width: 100%;"/>

### How it's done

- User create an account and logs in.
- User then apply's for a doctor, then admin then approves or rejects the request.
- If approved, the doctor's info will be listed for a patient to book a session.
  <img src="/images/apply-doctor-form.png" alt="doctor-form" style="height: 300px; width: 100%;"/>

## Doctor's role

- Doctor approves/reject patient's appointment.
- Doctor can update his/her profile
  <img src="/images/appointment-list.png" alt="admin-dashboard" style="height: 300px; width: 100%;"/>

## User(patient) role

- User checks the availability of the doctor before booking.
- Once he/she submits the appointment, he/she waits for the doctor to approve the appointment.
- The user will then receive a notification with a message whether the appointment was approved or rejected.
- The appointment status then changes from pending to either approved or rejected.
  <img src="/images/book-appointment.png" alt="admin-dashboard" style="height: 300px; width: 100%;"/>

# IMAGES SAMPLE

## Register

<img src="/images/register.png" alt="admin-dashboard" style="height: 300px; width: 100%;"/>

## Login

<img src="/images/login.png" alt="admin-dashboard" style="height: 300px; width: 100%;"/>

## Apply Doctor Form

<img src="/images/apply-doctor-form.png" alt="admin-dashboard" style="height: 300px; width: 100%;"/>

## Doctor's list

<img src="/images/doctorslist.png" alt="admin-dashboard" style="height: 300px; width: 100%;"/>

## user's list

<img src="/images/userslist.png" alt="admin-dashboard" style="height: 300px; width: 100%;"/>
