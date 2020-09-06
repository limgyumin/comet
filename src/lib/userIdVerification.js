const userIdVerification = () => {
  const userId = localStorage.getItem("userId");

  if (userId !== undefined) {
    return userId;
  } else {
    return null;
  }
};

export default userIdVerification;
