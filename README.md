# Feedback Wheel

(WIP)

Get reviews on your content and review other people's videos too!

---

## Tech Stack / Libraries

- [TypeScript](https://www.typescriptlang.org/)
- [React (create-react-app)](https://create-react-app.dev/)
- [Mantine](https://mantine.dev/)
- [React Router](https://reactrouter.com/)
- [React Query](https://react-query.tanstack.com/)

---

## Features

- Login and signup (via email for now; SSO to follow)
- Submit a video and ask people in the community for reviews
- Check out other people's content, and submit reviews for them
- View review stats (and eventually all the review comments)

## To Do

- [ ] Reviews list
- [ ] Upvote comments
- [ ] Wire up logic on the Video page
- [ ] Linting
- [ ] Component tests
- [ ] Proper backend
- [ ] ...

---

## Development

### Install packages

```console
$ yarn install
```

### Windows local development

Please make sure to run `git config --local core.autocrlf false` to prevent `LF will be replaced by CRLF in` errors when doing commits

## Available Scripts

In the project directory, you can run:

### `yarn run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
