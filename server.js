var express    = require('express');
var handlebars = require('express-handlebars');

var app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server running'));

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use('/', require('./routing/routes.js'));
app.use('/bootcamp', require('./routing/bootcamp.js'));
app.use('/design', require('./routing/design.js'));
app.use('/dev', require('./routing/dev.js'));
app.use('/apps', require('./routing/dev.js'));
