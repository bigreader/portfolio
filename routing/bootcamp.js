var express = require('express');

var projects = require('../data/bootcamp.json');

var router = express.Router();

router.get('/', (req, res) => {
	res.render('gallery', {
		title: 'Bootcamp',
		tab: {bootcamp: true},
		items: projects
	});
});

router.get('/:project', (req, res) => {
	var project = projects.find(p => p.link === req.originalUrl);
	if (!project) return res.status(404).end();

	res.render('project', {
		title: project.title,
		tab: {bootcamp: true},
		project: project
	});
});

module.exports = router;
