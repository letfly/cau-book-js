const Router = require('koa-router');
const Book = require('../models/books');

const router = new Router();

router.get('/', home);
async function home(ctx) {
  await ctx.render('home');
}

router.post('/add', add);
async function add(ctx) {
  // 当POST请求的时候，解析POST表单里的数据，并显示出来
  const form = ctx.request.body;
  const name = form['name'];
  const author = form['author'];
  await Book.create({
    name: name,
    author: author,
    date_created: Date.now()
  });
  ctx.body = { status: 'success' };
}

router.post('/delete/:book_id', delete_);
async function delete_(ctx) {
  await Book.destroy({
    where: { id: ctx.params.book_id }
  });
  ctx.body = { status: 'success' };
}

router.post('/update/', update);
async function update(ctx) {
  const form = ctx.request.body;
  var b = await Book.findById(form['id']);
  b.status = form['status'];
  await b.save();
  ctx.body = { status: 'success' };
}

router.get('/list', list);
async function list(ctx) {
  var books = await Book.findAll({ order: 'date_created DESC' });
  var result = new Array();
  for (let b of books) {
    result.push({
      "id": b.id,
      "name": b.name,
      "author": b.author,
      "status": b.status,
      "date_created": b.date_created
    });
  }
  console.log(result);
  ctx.body = { status: 'success', "books": result };
}

module.exports = router;
