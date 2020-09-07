import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class UserStore {
  @observable userId;
  @observable userInfo;
  @observable todayCommit;
  @observable goalCommit;
  @observable weekCommit;

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
    localStorage.setItem("userId", id);
  };

  @action
  getUserId = () => {
    this.userId = localStorage.getItem("userId");
    return this.userId;
  };

  @action
  setTodayCommit = (commit) => {
    this.todayCommit = commit;
  };

  @action
  setGoalCommit = (commit) => {
    this.goalCommit = commit;
  };

  @action
  setWeekCommit = (commit) => {
    this.weekCommit = commit;
  };

  @action
  startLogout = () => {
    localStorage.removeItem("userId");
    window.location.reload(false);
  };
}

export default UserStore;
