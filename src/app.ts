import express from 'express';
import path from 'path';
import { createRestApiServer } from 'core/servers';
import { envConstants } from 'core/constants';
import {
  logRequestMiddleware,
  logErrorRequestMiddleware,
} from 'common/middlewares';
import { housesApi } from 'pods/house';

const restApiServer = createRestApiServer();

console.log("2");
console.log(envConstants.STATIC_FILES_PATH);
const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use('/', express.static(staticFilesPath));

restApiServer.use(logRequestMiddleware);

restApiServer.use('/api/houses', housesApi);

restApiServer.use(logErrorRequestMiddleware);

restApiServer.listen(envConstants.PORT, () => {
  if (!envConstants.isApiMock) {
    //await connectToDBServer(envConstants.MONGODB_URI);
    console.log('Connected to DB');
  } else {
    console.log('Running API mock');
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});
