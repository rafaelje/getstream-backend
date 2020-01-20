import { follow } from "../controllers/v1/follow";
import { wrapAsync } from "../utils/controllers";

module.exports = api => {
  api.route("/v1/follow").post(wrapAsync(follow));
};
