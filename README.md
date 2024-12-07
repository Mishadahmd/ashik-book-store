1. Setup client with vite with JS and tailwind.
2. Install react-router-dom and setting up router

-   ` <Outlet/>` - renders the child route elements if it exists

```js
//router.jsx
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>,
            },
        ],
    },
]);

// App.jsx
function App() {
    return (
        <>
            <Outlet />
        </>
    );
}
```

3. Color customization and font customization

```js
//tailwind.config.js
   theme: {
        extend: {
            colors: {
                primary: "#FFCE1A",
                secondary: "#0D0842",
                blackBG: "#F3F3F3",
                Favorite: "#FF5841",
            },
            fontFamily: {
                primary: ["Montserrat", "sans-serif"],
                secondary: ["Nunito Sans", "sans-serif"],
            },
        },
    },
```

![UI Part](image.png)

![UI Banner](image-1.png)

```js
function getImageUrl(name) {
    return new URL(`../assets/books/${name}`, import.meta.url);
}

we use import.meta.url, which is a standard way of handling module-relative paths in modern JavaScript.
```

${book?.oldPrice}

-   Optional checking (?)

[Swiper JS](https://swiperjs.com/)

`npm install swiper`

[Navigation](https://swiperjs.com/demos#navigation)
[Response Breakpoints](https://swiperjs.com/demos#responsive-breakpoints)

-   For multi cursor to change click Alt

import news1 from "../../assets/news/news-1.png";
import news2 from "../../assets/news/news-2.png";

Change the name in index.html

```html
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/fav-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Book Store App</title>
</head>
```

Use static files in public folder, so can easily access here like this.
href="/fav-icon.png"

[React Hook Form](https://react-hook-form.com/get-started)

`npm install react-hook-form`

[Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

```js
const handleAddToCart = (product) => {
    dispatch(addToCart(product));
};

<button
    onClick={() => handleAddToCart(book)}
>

TO WITHOUT USE handleAddToCart,

onClick={() => dispatch(addToCart(book))}

```

TO get Count of Items in NavBar, useSelect

```js
const cartItems = useSelector((state) => state.cart.cartItems);

//Format
`state.nameOfSlice.initialStateNameWithin`;
```

[Sweet Alert](https://sweetalert2.github.io/)

`npm install sweetalert2`

//main.js
import "sweetalert2/dist/sweetalert2.js";

// NavBar.js
import Swal from "sweetalert2";

Keynote:

Key difference:

onClick={handleClearCart}: Works because the function doesn’t need arguments and can be directly passed as a reference.
onClick={() => handleRemoveFromCart(item)}: Required when you need to pass arguments to the function during the button click.

# Backend

Initialize backend here
[ExpressJS](https://expressjs.com/en/starter/installing.html)
[Nodemon](https://www.npmjs.com/package/nodemon)

-   npm install --save-dev nodemon (nodemon as a development dependency)

[Mongoose](https://mongoosejs.com/docs/index.html)
[Dotenv](https://www.npmjs.com/package/dotenv)

mongodb+srv://<uname>:<pwd>@cluster0.bvmvj.mongodb.net/<db-name>?retryWrites=true&w=majority&appName=Cluster0

-   need to define db after put the url

-   # This is a comment
    SECRET_KEY=YOURSECRETKEYGOESHERE # comment
    SECRET_HASH="something-with-a-#-hash"
    Comments begin where a # exists, so if your value contains a # please wrap it in quotes. This is a breaking change from >= v15.0.0 and on.

After set the db, have to give the network as anywhere.

[Cors](https://www.npmjs.com/package/cors)

The express. json() function is a built-in middleware in Express that is used for parsing incoming requests with JSON payload. The express. json middleware is important for parsing incoming JSON payloads and making that data available in the req.

In a nutshell, we are sending form data from frontend to backend, to receive the data in the backend, we use req.body right. to receive those data in req.body we need to pass this json payload

Working flow:

-   define the model, route and use in the server.js

*   To create the product(post request),
    -   Pass the data(come through req.body) to Model (Book({..req.body}))
    -   save the newBook to db (https://mongoosejs.com/docs/documents.html)
    -   res.statusCode.send() / res.statusCode.json()

### res.send() vs res.json()

**res.send()** - The res.send() function is used for sending the response for the HTTP request. It takes a parameter body. The parameter can be a String, Buffer object, an object, Boolean, or an Array.

Syntax:
`res.send( [body] )`
Parameter: The body parameter takes a single argument that describes the body that is to be sent in the response.

Content Type: The Express sets the content type of the parameter according to the type of the body parameter.

String & HTML - “text/html”
Buffer - “application/octet-stream”
Array & object - "application/json"
Return Type: It is used to send a response to the client and then ends the response process. The method itself doesn't return anything.

**res.json()** - The res.json() function sends the response as JSON format. It automatically converts the JavaScript object into a JSON-formatted string. The parameter body can be of any JSON type, which includes object, array, string, Boolean, number, or null.

res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.

Syntax:
`res.json( [body] )`
Parameter: The body parameter takes JavaScript Object as its argument.

Content Type: Its content-type is set to - "application/json".

Returns: It is used to send JSON response to the client and then ends the response process.

Inorder to maintain MVC structure, moving the route async function into controller

-   Methods of mongoose (https://mongoosejs.com/docs/queries.html)

After creating the controller, in the frontend we fetch the bookData from json file and we need to fetch from API using Redux toolkit inorder to be dynamic.
[Redux vs Redux toolkit](https://30dayscoding.com/blog/redux-vs-redux-toolkit)

## [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started)

[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

Based on the documentation,
we can capture the things, and how that works.

[fetchBaseQuery](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery)

```js
if you are using,
`export const <nameOfFunc>`

`import {nameofFunc} from "../"`

but in default export function,
`import nameOfFunc from "../"`
```
