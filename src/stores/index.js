import UserStore from "./UserStore";
import GitHubStore from "./GitHub/GitHubStore";
import UserInfoStore from "./UserInfo/UserInfoStore";
import GitHubAuthStore from "./GitHubAuth/GitHubAuthStore";

const stores = {
  UserStore: new UserStore(),
  UserInfoStore: new UserInfoStore(),
  GitHubStore: new GitHubStore(),
  GitHubAuthStore: new GitHubAuthStore(),
};

export default stores;
