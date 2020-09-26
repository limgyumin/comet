import axios from "axios";
import { SERVER } from "../../config/config.json";

class GitHubRepository {
  Login = async (request) => {
    const { data } = await axios.post(`${SERVER}/auth/login`);
    return data;
  };
}

export default new GitHubRepository();
