console.log('App loaded.');

var img = document.createElement('img');
img.style.height = '100%';
img.style.width = '100%';
img.src = require('../public/images/pic.png');
document.body.appendChild(img);

require('../public/styles/bootstrap.less');
require('../public/styles/main.css');

