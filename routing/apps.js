var express = require('express');
var fs      = require('fs');

var projects = require('../data/apps.json');

var router = express.Router();

router.get('/', (req, res) => {
	res.render('gallery', {
		title: 'Apps',
		tab: {apps: true},
		items: projects
	});
});

router.get('/:project', (req, res) => {
	var project = projects.find(p => p.link === req.originalUrl);
	if (!project || !project.page) {
		console.log(req.originalUrl, project);
		return res.status(404).end();
	}

	if (project.page.src) {
		fs.readFile('./data/html' + project.page.src, 'utf8', (err, data) => {
			if (err) throw err;
			return res.render('src', {
				title: project.title,
				tab: {apps: true},
				src: data
			});
		});

	} else if (project.page) {
		return res.render('project', {
			title: project.title,
			tab: {apps: true},
			project: project
		});
	}

});

module.exports = router;
