const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
	res.render('landing');
});

app.get('/campgrounds', (req, res) => {
	const campgrounds = [
		{name: 'Salmon Creek', image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350'},
		{name: 'Granite Hill', image: 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350'},
		{name: `Mountain Goat's Rest`, image: 'https://images.pexels.com/photos/1239422/pexels-photo-1239422.jpeg?auto=compress&cs=tinysrgb&h=350'},
	];

	res.render('campgrounds', { campgrounds });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`YelpCamp is running on port ${port}`);
});