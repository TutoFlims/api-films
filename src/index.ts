import environments from "./utils/loadEnvironments.js";

import startServer from "./server/index.js";

const { port } = environments;

(async () => {
  await startServer(port);
  // Console.log("Search Film", 315162);
})();
