import app from './app';
import config from './config';

const startApp = async () => {
  app
    .listen(config.PORT, () => {
      console.log(`Server started on port ${config.PORT}`);
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
};

startApp();
