const Router = require('koa-router');
const Book = require('../models/books');

const router = Router();
router.get('/', home);
async function home(ctx) {
  await ctx.render('home');
}

router.post('/add', add);
async function add(ctx) {
  // 当POST请求的时候，解析POST表单里的数据，并显示出来
  const form = ctx.request.body;
  const name = form['name'];
  (async() => {
    const book = await Book.create({
      name: name,
      date_created: Date.now()
    });
    console.log('created: ' + JSON.stringify(book));
  })();
}

router.post('/delete/<string:book_id>', deleteData);
async function deleteData(ctx) {}

router.post('/update', update);
async function update(ctx) {}

router.post('/list', list);
async function list(ctx) {}

module.exports = router;
