import UserStore from "./UserStore";
import GitHubStore from "./GitHub/GitHubStore";
import UserInfoStore from "./UserInfo/UserInfoStore";

const stores = {
  UserStore: new UserStore(),
  GitHubStore: new GitHubStore(),
  UserInfoStore: new UserInfoStore(),
};

export default stores;
