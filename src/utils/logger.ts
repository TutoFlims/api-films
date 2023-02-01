import "./loadEnvironments.js";

import chalk from "chalk";
import debugCreator from "debug";

const debug = debugCreator("system:server");

export default {
  info(message: string) {
    debug(chalk.blueBright(message));
  },
  error(message: string) {
    debug(chalk.redBright(message));
  },
};
