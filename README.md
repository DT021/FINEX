<img src="https://i.imgur.com/CyybBmS.png" height=100><br>


## Problem Statement
Personal finance tools are very segmented and can be difficult to navigate. We want to create an easy-to-use tool which allows the user to track various aspects of personal finance. This will be different from existing or similar services due to its navigable UI as well as its combination of existing services into one application. It will also attempt to further the public’s financial literacy through the use of pictorial representations and other devices to help those who may not understand financial terms used in other, similar products.

## This project is hosted [here](https://finex.money/)

## Project Objectives
- Build a website which will be able to provide a dashboard to manage personal finances and view stock portfolio
- Create user profiles for storing personal information and data on personal finances
- Maintain a backend service to facilitate communication from the application and database
- Develop a system to manage finances such as budgeting and expense report
- Develop a system to view stock information and alert users of changes

## The Team
[Hugh Bromund](https://github.com/hughbromund)

[Peyton Williams](https://github.com/peytondwilliams)

[Aditya Naik](https://github.com/adityan9900)

[Daniel Joseph](https://github.com/dadeej)

[Nathan Ashta](https://github.com/nathanashta)

[Niyati Sriram](https://github.com/niyativs)

## Local Installation

1) Clone the repo
2) `./install.sh`
3) `npm run start`
4) Open Google Chrome without CORS enforcement
    * Windows: `"[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp`
    * OSX: `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`
    * Linux: `google-chrome --disable-web-security`
5) Navigate to `localhost:3000`

## Structure
FINEX is currently hosted on Google App Engine and built in NodeJS with a MongoDB database and Amazon S3 storage bucket. We are structured as a thin-client application, with most tasks being completed on the backend and sent to the frontend via http request. We use the AlphaVantage API for our stock prices, which currently supports X requests per minute. 
The backend is structured as follows:
- database/models: mongoose schemas for all collections in the database, including user, budget, and transaction
- Service: functions that call the database and return or update requested information
- Controller: receives JSON objects from Services and returns them via http request to the frontend
- Router: includes all http endpoints 
The frontend is structured as follows:
- src/components: all website pages
- src/assets: all constant images used on the site
- src/routing: all inter-page routing for the site

## Features
- Creating a user account with username, password, email ID and profile picture
- Requesting an autogenerated password via email if user forgets password
- Tracking specific stocks and saving them
- Simulating buying and selling stocks
- Creating a monthly budget and comparing that to actual spending via transactions
- Customizing light/dark mode and color preferences
- View and compare stock analytics, graphs, and information

## Licensing
This project is MIT licensed

### CS307 - Team 8






