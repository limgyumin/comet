import UserStore from "./UserStore";
import RegisterStore from "./Register/RegisterStore";

const stores = {
  UserStore: new UserStore(),
  RegisterStore: new RegisterStore(),
};

export default stores;
