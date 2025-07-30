# odin-members-only

### App Title: <ins>**_EchoBoard_**</ins>

This repository was made as a submission requirement to [The Odin Project: Members Only](https://www.theodinproject.com/lessons/node-path-nodejs-members-only)

![Echoboard app image](https://imgur.com/NAQpppb.jpg)

## Live Demo

You can access the website here: https://odin-members-only-udtz.onrender.com/

## Features

This app allows you to submit posts privately, except for the accepted members. It uses a specific permission structures to handle privacy of posting, and moderate content.

## Installation

Clone this repository, and install the necessary modules by running this command in your command line that was relative to the file directory you've created:

```
npm install
```

Several sensitive data, including the database URI were stored under several [environment variables](https://en.wikipedia.org/wiki/Environment_variable). This is to secure the data, and integrity of the app. Therefore, a new [PostgreSQL](https://www.postgresql.org/) database must be configured.

The following environmental variables are required to make the app running. They must be stored under an `.env` file.

- `POOL_URI` - the URI provided by PostgreSQL that was configured to make a connection to the database.
- `SESSION_SECRET` - used to verify the session ID from the logged account
- `SECRET_MEMBER_CODE`- code required to insert to become a member
- `SECRET_ADMIN_CODE` - code required to insert to become an admin

You also need to create the tables inside the PostgreSQL database. To do this, simply execute the following line:

```
npm run schema
```

Once done, you can now run the app by running this command. A URL link will be provided as an output which you need to access:

```
npm run server
```

## Components

This repository utilizes the following libraries and/or APIs:

- [Express JS](https://expressjs.com/)
- [Express Session](https://expressjs.com/en/resources/middleware/session.html)
- [Express Validator](https://express-validator.github.io/docs/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Passport JS](https://www.passportjs.org/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
