var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
	res.render('gallery', {
		items: require('../data/index.json')
	});
});

router.get('/design', (req, res) => {
	res.render('gallery', {
		title: 'Design',
		tab: {design: true},
		items: require('../data/design.json')
	});
});

router.get('/about', (req, res) => {
	res.render('page', {
		tab: {about: true},
		content: require('../data/about.json')
	});
});

module.exports = router;
