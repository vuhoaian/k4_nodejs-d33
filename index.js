const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


const router = require("./routes")
const db = require('./config/db')
db.connect();

router(app)
// app.get("/", (req, res) => {
//     res.render("home");
//   });

// app.get("/home", (req, res) => {
//     return res.send('Hello Home!');
//   });
  // app.get("/products/:id", (req, res) => {
  //     const {query, params, body} = req
  //     console.log(query)
  //     console.log(params)
  //     console.log(body)
  //     // return res.send('Hello World!');
  //     res.render("home");
  //   });
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);



