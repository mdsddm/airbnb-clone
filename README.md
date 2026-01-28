# StayNest — Airbnb Clone

A full-stack Airbnb-style application built with Node.js, Express, EJS and MongoDB. It implements user authentication, property listings, image uploads (Cloudinary), reviews, and seeding utilities so you can run and explore a realistic dataset locally.

## Features

- User registration, login and session handling (Passport + `express-session`).
- Create, edit, delete and browse property listings with images.
- Upload images to Cloudinary via `multer` + `multer-storage-cloudinary`.
- Leave reviews for listings.
- Seed script to populate the database with realistic sample listings.

## Tech Stack

- Node.js + Express 5
- EJS + ejs-mate for server-rendered views
- MongoDB + Mongoose
- Passport (local strategy) for authentication
- Cloudinary for image hosting
- Multer for multipart uploads
- Joi for server-side validation

## Repo Structure (key files)

- [app.js](app.js): Application bootstrap and middleware.
- [cloudConfig.js](cloudConfig.js): Cloudinary configuration and storage.
- [models/](models): Mongoose models (`listing.js`, `review.js`, `user.js`).
- [routes/](routes): Express route files for listings, reviews and users.
- [controllers/](controllers): Route handler logic.
- [init/](init): Seeding scripts and example data.
- [views/](views): EJS templates for pages.

## Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)
- MongoDB running locally (or a MongoDB URI)
- (Optional) Cloudinary account to upload images

## Environment Variables

Create a `.env` file in the project root for any non-default configuration. The app currently reads environment variables when `NODE_ENV` is not `production`.

- `DB_URI` — (optional) MongoDB connection string. If omitted, the app connects to `mongodb://127.0.0.1:27017/staynest`.
- `CLOUD_NAME` — Cloudinary cloud name (if using Cloudinary uploads).
- `CLOUD_API_KEY` — Cloudinary API key.
- `CLOUD_API_SECRET` — Cloudinary API secret.
- `NODE_ENV` — Set to `production` in production environments.

Note: The repository currently includes a hard-coded session secret and local MongoDB URL in `app.js` and uses `init/` scripts which connect to the local DB. If you set `DB_URI`, update `app.js` accordingly or set `MONGO_URL` in your environment and edit `app.js` to read it.

## Installation

1. Clone the repo:

```bash
git clone https://github.com/mdsddm/airbnb-clone.git
cd airbnb-clone
```

2. Install dependencies:

```bash
npm install
```

3. Add a `.env` file (optional) with the variables described above.

## Seed the Database (sample listings)

The project includes a seeding utility that generates sample listings using `@faker-js/faker`.

Run the seeding script (make sure MongoDB is running locally or update the connection string in `init/index.js`):

```bash
node init/index.js
```

This will insert ~120 sample listings into the `staynest` database and then close the connection.

## Run the App

Start the app with Node:

```bash
node app.js
```

Or use `nodemon` for development (installed as a dependency):

```bash
npx nodemon app.js
```

The server listens on port `8080` by default. Open http://localhost:8080 in your browser.

## Important Files & Scripts

- `app.js` — Main server file and middleware setup.
- `cloudConfig.js` — Cloudinary + multer storage configuration.
- `init/index.js` — Entry point for seeding sample data.

## Routes Overview

- `GET /` — Landing and auth routes (user router handles root routes).
- `GET /listings` — Browse all listings.
- `GET /listings/new` — Form to create a listing.
- `POST /listings` — Create listing (multipart for images).
- `GET /listings/:id` — Show listing details and reviews.
- `PUT /listings/:id` — Update listing.
- `DELETE /listings/:id` — Delete listing.
- `POST /listings/:id/reviews` — Add a review.

See the `routes` directory for the full set of routes and `controllers/` for handler logic.

## Contributing

- Fork the repository and open a PR with a clear description of your changes.
- Add tests if you introduce new behavior.

## License

This project is published under the ISC license (see `package.json`).

---

If you'd like, I can also:

- add `start` and `dev` scripts to `package.json`,
- update `app.js` to read secrets from `.env` and document exact env variable names used by the running server, or
- add a short screenshot/gif and a sample `.env.example` file.

File updated: [README.md](README.md)
