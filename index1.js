var qr = require('qr-image');
 
var qr_svg = qr.image('7627023295', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('generated QR.svg'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });