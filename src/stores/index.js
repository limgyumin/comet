import UserStore from "./UserStore";
import UserInfoStore from "./UserInfo/UserInfoStore";
import GitHubAuthStore from "./GitHubAuth/GitHubAuthStore";

const stores = {
  UserStore: new UserStore(),
  UserInfoStore: new UserInfoStore(),
  GitHubAuthStore: new GitHubAuthStore(),
};

export default stores;
