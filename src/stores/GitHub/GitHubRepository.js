import axios from "axios";
import { SERVER } from "../../config/config.json";

class GitHubRepository {
  Login = async (request) => {
    console.log("이거 맞나?", request);
    const { data } = await axios.post(`${SERVER}/auth/login`, {
      code: request,
    });
    return data;
  };
}

export default new GitHubRepository();
