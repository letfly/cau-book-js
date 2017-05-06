const Router = require('koa-router');

const router = Router();
router.get('/', index);
async function index(ctx, next) {
  const locals = {};
  await ctx.render('home', locals);
}
module.exports = router;
