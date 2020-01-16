import { channel } from "../controllers/v1/channel";
import { wrapAsync } from "../utils/controllers";

module.exports = api => {
  api.route("/v1/channel").post(wrapAsync(channel));
};
