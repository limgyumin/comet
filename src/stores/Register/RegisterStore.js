import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import RegisterRepository from "./RegisterRepository";

@autobind
class RegisterStore {
  @action
  async handleRegister(request) {
    const response = await RegisterRepository.Register(request);
    return response;
  }
}

export default RegisterStore;
