const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const statics = require('koa-static');
const views = require('koa-views');
const path = require('path');

const router = require('./controllers/home');

function create_app() {
  const app = new Koa();
  app.use(views(path.resolve(__dirname, './templates'), { extension: 'html' })); //设置模板路径以及模板的后缀名
  app.use(statics(path.resolve(__dirname, './static'))); //设置静态文件路径
  // 使用ctx.body解析中间件
  app.use(bodyParser());
  register_blueprints(app);
  return app;
}
function register_blueprints(app) {
  app.use(router.routes(), router.allowedMethods());
}

module.exports = { create_app };
