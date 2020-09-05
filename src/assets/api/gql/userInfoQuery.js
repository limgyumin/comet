import gql from "graphql-tag";

export default (userId) => {
  return gql`
  {
    user(login: "${userId}") {
      login
      avatarUrl
      bio
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;
};
