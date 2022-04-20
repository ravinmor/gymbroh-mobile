# gymbroh-mobile
![Design sem nome (2)](https://user-images.githubusercontent.com/50897495/164308685-d8a164b0-5ecb-4bfe-adee-8aef63579a5c.png)


## Table of contents

<ul>
  <li><a href="#about">About</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#pre-requisites">Pre-requisites</a></li>
  <li><a href="#setup">Setup</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#inspiration">Inspiration</a></li>
  <li><a href="#infos">Infos</a></li>
</ul> 

## About
<h4 align="center">
  🚧 Still building... 🚧
</h4>

Simple app that allows personal trainers and gyms to schedule exercises in a chosen day for his students.

An instructor can join a gym or a student can link to an instructor. The link is made by a QR Code, the affiliate simply scans the instructor/academy's QRcode and automatically one will be linked as the responsibility of the other.

Once this is done, the instructor will be able to schedule the training sessions for the students, or in the gym case, the gym will be able to view and update the training sessions scheduled by their affiliated instructors.

This application has a complete authentication system with email and password, based on permissions that define which screens you will have access to. This system is based on roles and permissions, each role has its own permissions and each permission is a unique entity. This allows new roles to be created with different permissions. The system also supports validating route permissions based only on permissions rather than roles. At the moment some routes are not validated because I still carry out some tests 🚧, however it is possible to carry out the tests of access to restricted routes by making changes in the src/routes.ts file.

The authentication is based on Json Web Tokens(JWT).

Is used PostgreSQL in this app, so the ORM choosed was typeORM that gives me an elegant way to deal with database.

## Features
<ul>
  <li><p>Authentication system in JWT, based on this <a href="https://levelup.gitconnected.com/react-native-authentication-flow-the-simplest-and-most-efficient-way-3aa13e80af61" target="_blank">article</a></p></li>
  <li><p>Route access control based on user roles</p></li>
  <li><p>User link with QRCode</p></li>
  <li><p>Schedule exercises function</p></li>
  <li><p>Exercises grouped by categories as legs, chest, arms, abs etc</p></li>
</ul>

## Pre-requisites
To runs this app you will need to have on your PC the followings techs:

<ul>
  <li><a href="https://nodejs.org/en/">NodeJs</a></li>
  <li><a href="https://yarnpkg.com/">Yarn</a></li>
  <li>An code editor of your choice, I recommend <a href="https://code.visualstudio.com/">VS Code</a></li>
  <li>Install and setup the <a href="https://github.com/ravinmor/gymbroh-backend">backend app</a></li>
</ul>

## Setup
To start the project will be necessary run the following scripts:
```bash
#Clone the repository
$ git clone https://github.com/ravinmor/gymbroh-mobile.git

#Access the backend app folder
$ cd gymbroh-mobile

#Install packages
$ yarn

#Start the app
$ yarn start

# The server wil run on expo, download the app on play store and test on your phone
```

## Technologies
<ul>
  <li>@expo-google-fonts/nunito: 0.2.2</li>
  <li>@expo/vector-icons: 12.0.5</li>
  <li>@react-native-async-storage/async-storage: 1.15.0</li>
  <li>@react-native-clipboard/clipboard: 1.8.5</li>
  <li>@react-native-community/clipboard: 1.5.1</li>
  <li>@react-native-community/datetimepicker: 4.0.0</li>
  <li>@react-native-community/picker: 1.8.1</li>
  <li>@react-native-picker/picker: 2.2.1</li>
  <li>@react-navigation/native: 6.0.7</li>
  <li>@react-navigation/stack: 6.1.0</li>
  <li>axios: 0.25.0</li>
  <li>expo: 44.0.0</li>
  <li>expo-barcode-scanner: 11.2.1</li>
  <li>expo-clipboard: 2.1.0</li>
  <li>expo-font: 10.0.4</li>
  <li>expo-image-picker: 12.0.2</li>
  <li>expo-status-bar: 1.2.0</li>
  <li>react: 17.0.1</li>
  <li>react-dom: 17.0.1</li>
  <li>react-native: 0.64.3</li>
  <li>react-native-calendars: 1.1276.0</li>
  <li>react-native-datepicker: 1.7.2</li>
  <li>react-native-gesture-handler: 2.1.0</li>
  <li>react-native-maps: 0.29.4</li>
  <li>react-native-paper: 4.11.2</li>
  <li>react-native-qrcode-generator: 1.2.2</li>
  <li>react-native-safe-area-context: 3.3.2</li>
  <li>react-native-web: 0.17.1</li>
  <li>react-native-webview: 11.15.0</li>
</ul>

## Inspiration
The reason why I created this app is that I noticed that only big gyms had yours own apps, so I decided to built something that could be used by every gym, even the small ones and personal trainers too.

## Infos
<p>Author: <a href="https://github.com/ravinmor">Ravin Mor</a></p>
<p>Email contact: ravinmmor@gmail.com or ravinmenezes@outlook.com</p>
