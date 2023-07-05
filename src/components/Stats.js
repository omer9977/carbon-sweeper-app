import "../css/stats.css";
import { useState, useEffect } from 'react';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { getUsersWelcomeDataAsync } from "../services/UserService";


function Stats() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [savedTrees, setSavedTrees] = useState(0);
  const [totalFootPrint, setTotalFootPrint] = useState(0);
  
  const [showModalSignin, setShowModalSignin] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsersWelcomeDataAsync();
        const welcomeData = response.data;
        setTotalUsers(welcomeData.totalUserAmount);
        setSavedTrees(welcomeData.savedTrees);
        setTotalFootPrint(welcomeData.totalFootPrint);
        console.log(response);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleShowModalSignin = () => {
    setShowModalSignin(true);
  };

  const handleCloseModalSignin = () => {
    setShowModalSignin(false);
  };

  const handleShowModalSignup = () => {
    setShowModalSignup(true);
  };

  const handleCloseModalSignup = () => {
    setShowModalSignup(false);
  };

 
  

  return (
    <div className="content">
      <div>
        <img className="custom-image" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house" />
      </div>
      <div>
        <div className="statsec">Total users: {totalUsers}</div>
        <div className="statsec">Saved trees: {savedTrees}</div>
        <div className="statsec">Total carbon footprints: {totalFootPrint/1000} ton</div>
        <div className="buttons">
          <button onClick={handleShowModalSignin}>Sign In</button>
          <button onClick={handleShowModalSignup}>Sign Up</button>
        </div>
      </div>
      <SignIn showModal={showModalSignin} handleCloseModal={handleCloseModalSignin} />
      <SignUp showModal={showModalSignup} handleCloseModal={handleCloseModalSignup} />
    </div>
  );
}

export default Stats;
