# Exam Result Tracking System

A tool developed to assist me during my preparation for the Higher Education Institutions Exam (YKS).

## Purpose of the Website

The purpose of the website is to help students preparing for the Higher Education Institutions Exam (YKS) to easily review their exam results and analyze them more comfortably.

# Code Overview

## Dependencies

- [body-parser](https://www.npmjs.com/package/body-parser) - Used to simplify URL handling.
- [connect-mongo](https://www.npmjs.com/package/connect-mongo) - Used to facilitate communication with MongoDB for storing user information in *sessions*.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Used to store the site language in cookies to make it easier for the user.
- [crypto](https://www.npmjs.com/package/crypto) - Used to encrypt user data when saving it to the database
- [dotenv](https://www.npmjs.com/package/dotenv) - Used to easily change configurable parameters.
- [ejs](https://www.npmjs.com/package/ejs) - Used to handle server-side rendering.
- [express](https://www.npmjs.com/package/express) - Used to set up the HTTP server.
- [express-session](https://www.npmjs.com/package/express) - Used to simplify and facilitate handling user login with *sessions*.
- [mongoose](https://www.npmjs.com/package/mongoose) - Used to manage user data.
- [mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator) - Used to facilitate the validation of unique usernames for users.
- [passport](https://www.npmjs.com/package/passport) -  Used to make user login more dynamic and streamlined.
- [passport-local](https://www.npmjs.com/package/passport-local) - Used in the **passport** package to handle local login processes.

## Uygulama Mimarisi

- `server.js` - The starting point of the application. After setting up the server with Express, it establishes a connection with MongoDB and processes the routers.
- `controllers/` - Implements the functions using the MVC structure to make the development process more robust.
- `models/` - Contains the code for database operations.
- `routes/` -  Implements the routers using the MVC structure to facilitate their management and improve the development process.

> # Preview
You can view the frontend code <a href="https://deneme-sonucu-takip-sistemi.mevcollegemun.org">here</a>.

To test the system, there is an account with the username: Test and password: test. You can either register a new account or try the test account.

You can check an example exam result sharing link <a href="https://deneme-sonucu-takip-sistemi.mevcollegemun.org/detay/tyt/64a1a64bea8f39449c861c3d">here</a>.

# Authentication
[Passport.js](https://www.passportjs.org/) is used for user authentication. Although the package is extensive, only login via session is allowed due to the user base. Login information is saved as a session using the passport-local package.