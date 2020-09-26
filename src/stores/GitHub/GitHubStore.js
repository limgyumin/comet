import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import GitHubRepository from "./GitHubRepository";

@autobind
class GitHubStore {
  @action
  async handleLogin(request) {
    const response = await GitHubRepository.Login(request);
    return response;
  }
}

export default GitHubStore;
