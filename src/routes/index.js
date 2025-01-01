import newsRouter from './news.js';
import siteRouter from './site.js';

function router(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
}

export default router;
