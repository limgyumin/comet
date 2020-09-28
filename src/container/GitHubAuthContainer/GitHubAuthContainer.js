import React, { useState } from "react";
import GitHubAuth from "components/GitHubAuth";

const GitHubAuthContainer = () => {
  const [disable, setDisable] = useState(true);
  const onChange = (e) => {
    if (e.target.value.length) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <>
      <GitHubAuth disable={disable} onChange={onChange} />
    </>
  );
};

export default GitHubAuthContainer;
