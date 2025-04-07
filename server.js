const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // For form data

// Sample data
const projects = [
    { name: "Portfolio Site", description: "Built with Node.js and EJS", githubLink:"https://github.com/Myron222/Week2" },
    { name: "Task App", description: "A simple task manager" },
    { name: "Tea Leaf Salad Recipe", description: "How to make Burmese Traditional Food", githubLink:"https://github.com/Myron222/Tea-Leaf-Salad"},
    { name: "Addtional Projects", description: "Some Small Projects", githubLink:"https://github.com/Myron222/week5-additional"}
];

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/projects', (req, res) => res.render('projects', { projects }));
app.get('/blog', (req, res) => res.render('blog'));
app.get('/contact', (req, res) => res.render('contact'));



app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    console.log(`New message from ${name} (${email}): ${message}`);
    res.render('contact-success', { name });
});

const CUSTOM_PORT = process.env.PORT || 3000;
app.listen(CUSTOM_PORT, '0.0.0.0', () => {
    console.log(`Server is running on ${CUSTOM_PORT}`);
});
