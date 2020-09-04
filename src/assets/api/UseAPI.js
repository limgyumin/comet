import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_GITHUB_API = gql`
  {
    user(login: "limgyumin") {
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

const UseAPI = () => {
  const { data, loading, error } = useQuery(GET_GITHUB_API);
  if (loading) return <p>Loading</p>;
  if (error) console.log(error);
  if (data) console.log(data);

  return <div></div>;
};

export default UseAPI;
