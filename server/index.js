const createApp = require('./create-app.js');

const port = 8080;
const app = createApp();

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
