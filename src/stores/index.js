import GitHubAuthStore from "./GitHubAuth/GitHubAuthStore";
import MainStore from "./Main/MainStore";

const stores = {
  GitHubAuthStore: new GitHubAuthStore(),
  MainStore: new MainStore(),
};

export default stores;
