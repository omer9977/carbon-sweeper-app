const authenticateUser = async (email, password) => {
    try {
        console.log(email, password);
      return email;//accesstoken
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred during authentication');
    }
  };
  
  const logoutUser = async () => {
    try {
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred during logout');
    }
  };
  
  export { authenticateUser, logoutUser };
  