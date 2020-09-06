const userIdVerification = () => {
  const userId = localStorage.getItem("key");

  if (userId !== undefined) {
    return userId;
  } else {
    return null;
  }
};

export default userIdVerification;
