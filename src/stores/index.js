import UserStore from "./UserStore";
import GitHubStore from "./GitHub/GitHubStore";

const stores = {
  UserStore: new UserStore(),
  GitHubStore: new GitHubStore(),
};

export default stores;
