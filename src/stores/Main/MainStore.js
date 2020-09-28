import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import MainRepository from "./MainRepository";

@autobind
class MainStore {
  @action
  async handleUserInfo(request) {
    const response = await MainRepository.UserInfo(request);
    return response;
  }
}

export default MainStore;
