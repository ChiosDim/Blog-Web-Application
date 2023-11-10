import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = [];

//Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // Logic to fetch all posts
  res.render('index.ejs', { posts: posts }); // Pass fetched posts as an array
});

app.get('/create', (req, res) => {
  res.render('createPost.ejs');
});

app.post('/create', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
  const postId = req.params.id;
  const post = posts.find(post => post.id == postId);
  res.render('editPost', { post: post });
});

app.post('/edit/:id', (req, res) => {
  const postId = req.params.id;
  const updatedPost = {
    id: postId,
    title: req.body.title,
    content: req.body.content
  };
  posts = posts.map(post => (post.id == postId ? updatedPost : post));
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  const postId = req.params.id;
  posts = posts.filter(post => post.id != postId);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

