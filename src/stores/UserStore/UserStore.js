import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class UserStore {
  @observable userId;
  @observable userInfo;

  @action
  handleUserId = (id) => {
    this.userId = id;
  };

  @action
  handleUserData = (data) => {
    this.userInfo = data.user;
  };
}

export default UserStore;
