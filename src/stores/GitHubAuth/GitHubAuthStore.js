import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import GitHubAuthRepository from "./GitHubAuthRepository";

@autobind
class GitHubAuthStore {
  @action
  async handleRegister(request) {
    const response = await GitHubAuthRepository.Register(request);
    return response;
  }
}

export default GitHubAuthStore;
