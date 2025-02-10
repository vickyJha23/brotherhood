import app from './app';
import Config from './configs/config';
import dbConnect from './db/dbConnect';

const startServer = () => {
  const PORT = Config.PORT;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

dbConnect()
  .then(() => {
    startServer();
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.log(error.message);
      process.exit(1);
    } else {
      console.log('An unknown error has occurred');
    }
  });
