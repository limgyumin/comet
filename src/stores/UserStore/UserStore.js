import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class UserStore {
  @observable userId;
  @observable userInfo;
  @observable todayCommit;

  @action
  handleUserId = (id) => {
    this.userId = id;
  };

  @action
  handleUserData = (data) => {
    this.userInfo = data.user;
  };

  @action
  setUserId = (id) => {
    localStorage.setItem("key", id);
    const userData = localStorage.getItem("key");
    console.log("saved : " + userData);
  };

  @action
  getUserId = () => {
    this.userId = localStorage.getItem("key");
    return this.userId;
  };

  @action
  setTodayCommit = (commit) => {
    this.todayCommit = commit;
  };
}

export default UserStore;
