import UserStore from "./UserStore";
import UserInfoStore from "./UserInfo/UserInfoStore";
import GitHubAuthStore from "./GitHubAuth/GitHubAuthStore";
import MainStore from "./Main/MainStore";

const stores = {
  UserStore: new UserStore(),
  UserInfoStore: new UserInfoStore(),
  GitHubAuthStore: new GitHubAuthStore(),
  MainStore: new MainStore(),
};

export default stores;
