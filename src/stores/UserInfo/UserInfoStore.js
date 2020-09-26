import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class UserInfoStore {
  @observable userInfo = {};
  @observable success = false;

  @action
  handleUserId = (userInfo) => {
    this.userInfo = userInfo;
  };
  @action
  isSuccess = (success) => {
    this.success = success;
  };
}

export default UserInfoStore;
