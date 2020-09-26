import axios from "axios";
import { SERVER } from "../../config/config.json";

class RegisterRepository {
  Register = async (request) => {
    const { data } = await axios.post(`${SERVER}/user/github`, request);
    return data;
  };
}

export default new RegisterRepository();
