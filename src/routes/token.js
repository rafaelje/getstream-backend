import { token } from "../controllers/v1/token";
import { channel } from "../controllers/v1/channel";

import { wrapAsync } from "../utils/controllers";

module.exports = api => {
  api.route("/v1/token").post(wrapAsync(token));
  //api.route("/v1/channel").post(wrapAsync(channel));
};
