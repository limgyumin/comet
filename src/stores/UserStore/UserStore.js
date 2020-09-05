import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class UserStore {
  @observable userId;
  @observable userData;

  @action
  handleUserId = (id) => {
    this.userId = id;
  };

  @action
  handleUserData = (data) => {
    this.userData = data;
  };
}

export default UserStore;
