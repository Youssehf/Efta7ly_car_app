# Vehicle Localization System for BLE-Enabled Devices

This project is a mobile application developed using React Native and JavaScript. It allows users to lock/unlock a car when the mobile device is localized near the car using BLE (Bluetooth Low Energy) signals. The app communicates with a Firebase server, which sends commands to a Raspberry Pi controller.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Development Environment Setup](#React-Native-Environment)
- [Application Structure](#application-structure)
- [Design and Workflow](#design-and-workflow)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction
The initial phase of this project involved extensive planning and research to build a robust and efficient application. The primary goal was to create a cross-platform application capable of interfacing with a car via Bluetooth (BLE) for various controls, utilizing a Raspberry Pi as the microcontroller and Firebase for real-time data handling and server communication.

## Technologies Used
- React Native Framework: Chosen for its ability to build natively rendered applications for mobile platforms using JavaScript and React.
- Firebase: Selected for its real-time database features, and ease of integration.
- Bluetooth Technology: Implemented for establishing a stable and secure connection with the car's systems.

# React Native Environment
## React Native Installation:
- I assume you have already set up your React Native environment. If not, you can follow the [official documentation](https://reactnative.dev/docs/environment-setup){:target="_blank"}.
- In my case The React Native environment was set up by installing the necessary dependencies and libraries using Node Package Manager (NPM).


## Application Structure
- Welcome Page: The initial interaction point for users, prompting them to either sign up or log in.
- User Registration Page: Allows users to register by providing their email, password, and username. Authentication is done via Firebase.
- User Login Page: Contains fields for email and password, with options to reset the password or register a new account. Authentication is done via Firebase.
- Home Page: The central hub of the app, providing access to various sections like "Personal Details", "Car Details", "Connect Bluetooth", "Settings", and "Support".
- User Profile Page: Allows users to view and edit their profile information.
- Car Details Page: Provides a detailed view of the car's information, allowing users to add or remove cars from their profile.
- Connect Bluetooth: In this page I implemented BLE function, it's main goal is to advertise data (UUID in our case) to ESP32 using package (react-native-ble-advertise) the app is the prepherial that advertising data and ESP32 is scanning the data.

## Design and Workflow
- The app's design focuses on delivering a user-friendly and intuitive experience.
- User interactions are managed efficiently with real-time updates through Firebase.
- The application architecture ensures scalability and ease of maintenance.

## Installation
To set up the development environment, follow these steps:

1. Clone the repository:
```bash
git clone [repository_url]
```
2. Navigate to the project directory:
```bash
cd [project_directory]
```
3. Install the dependencies:
```bash
npm install
```
4. Run the application:
```bash
npm start
```

## Usage
Once the application is running, users can:

- Register and log in to their accounts.
- Add and manage their car details.
- Connect to their car via Bluetooth for locking/unlocking functionalities.
- Customize their profile and app settings.
- Access support for any issues or assistance.

## Contributing
Contributions are very welcomed! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes and commit them:
```bash
git commit -m 'Add some feature'
```
4. Push to the branch:
```bash
git push origin feature/your-feature-name
```
5. Create a new Pull Request.
