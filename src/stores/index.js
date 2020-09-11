import UserStore from "./UserStore";
import SetGoalCommitStore from "./SetGoalCommitStore";

const stores = {
  UserStore: new UserStore(),
  SetGoalCommitStore: new SetGoalCommitStore(),
};

export default stores;
