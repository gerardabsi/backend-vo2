import bodyParser from 'body-parser';
import compression from 'compression';
import express, { Request, Response, NextFunction } from 'express';
import ApplicationError from './errors/application-error';
import routes from './routes';

const application = express();
application.disable('x-powered-by');

application.use(compression());
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));

application.set('port', process.env.PORT || 3001);

application.use(routes);

application.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'development' ? err : undefined,
    message: err.message
  });
});

export default application;
