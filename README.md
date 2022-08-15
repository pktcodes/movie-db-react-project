# Movie DB 🎥

> PROD [Live] : https://react-movie-db-prod.netlify.app/

#### Movie DB consists of a straight forward user interface where there is a
- List of movies by default is set to batman, a search form to query for specific movies as we are typing.
- To get more details of a specific movie in the list, click on any **movie poster** which is set to route to another page where it shows the movie info along with a *Back to Movies* button to come back to **Homepage**.
- For each page render the **Loading** animation has been implemented and unknown route URLs are handled by the **error** message coming from API.
- When a query doesn't have any movies matching, it still shows the old list but it shows an **error** message below the search form and API handles it.
- To run the project locally, clone the repo, `npm install` to install the dependencies and `npm start` to start up the development server on default port 3000.

#### Languages

HTML, CSS, JavaScript, ECMAScript, React ~ Context API - Hooks ~ useState, useEffect, useFetch Custom Hook, React Router 6

#### API

https://www.omdbapi.com/

#### Deployment / Hosting

Netlify

---

#### React Router Fix

The routing implemented using react-router-dom to work properly on the server side after it has been continuous deployed on Netlify, [\_redirects](https://github.com/praveen-1995/movie-db-react-project/blob/42cea680883d356f6b9f586381b547d05f333d02/public/_redirects) is added. For more info - [Fix](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### CRA Fix

If an error occurs `'CI' is not recognized as an internal or external command, operable program or batch file.` when npm run build is used for the production build locally and manually deploying on Netlify, make sure to remove `CI=` for build in [package.json](https://github.com/praveen-1995/movie-db-react-project/blob/a39c21fa36e2782539f7c660a7f513d7ca32cede/package.json)

```

"build": "react-scripts build"

```

But make sure to add `CI=` again when using continuous deployment setup on Netlify otherwise errors will occur

```

"build": "CI= react-scripts build",

```

---

**To install React router 6**

```sh
npm install react-router-dom@6
```

_Note: I have developed this project ~ [21] as part of React and Projects Course taught by John Smilga._

