import axios from "axios";
import { SERVER } from "../../config/config.json";

class GitHubAuthRepository {
  Register = async (request) => {
    try {
      const { data } = await axios.post(`${SERVER}/github/user`, {
        username: request.name,
        userId: request.id,
      });
      return data;
    } catch (error) {
      const data = {
        status: 404,
      };
      return data;
    }
  };
}

export default new GitHubAuthRepository();
