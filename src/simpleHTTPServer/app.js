import express, {urlencoded} from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(urlencoded({ extended: true }));

function checkData(req, res, next) {
    const { name, email, notes } = req.body;
    if(!name || !email || notes) {
        return res.render('/contact')
    }
    next();
}
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/submit', (req, res) => {
    const { name, email, notes} = req.body;
    res.render('thanky u', {name,email,notes});
});

app.listen(port, () => {
    console.log('to stop local server ctrl C')
})




