import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // Set the view engine to EJS

// app.get('/', (req, res) => {
//   // Logic to fetch all posts
//   res.render('index.ejs', { posts: [] }); // Pass fetched posts as an array
// });

// app.get('/create', (req, res) => {
//   res.render('createPost.ejs');
// });

app.post('/create', (req, res) => {
  // Logic to create a new post
  res.redirect('/');
});

// app.get('/edit/:id', (req, res) => {
//   // Logic to find a post by id and render the edit page
//   res.render('editPost.ejs', { post: {} }); // Pass the found post
// });

app.post('/edit/:id', (req, res) => {
  // Logic to update the post by id
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  // Logic to delete the post by id
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

