import UserStore from "./UserStore";
import RegisterStore from "./Register/RegisterStore";
import GitHubStore from "./GitHub/GitHubStore";

const stores = {
  UserStore: new UserStore(),
  RegisterStore: new RegisterStore(),
  GitHubStore: new GitHubStore(),
};

export default stores;
