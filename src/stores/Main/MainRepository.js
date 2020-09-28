import axios from "axios";
import { SERVER } from "../../config/config.json";

class MainRepository {
  UserInfo = async (request) => {
    const { data } = await axios.post(`${SERVER}/github/user`, {
      username: "",
      userId: request,
    });
    return data;
  };
}

export default new MainRepository();
