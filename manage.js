const web = require('./book/app');

const app = web.create_app();
console.log('app started at port 5000...');
app.listen(5000);
