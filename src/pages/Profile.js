import React from 'react';
import '../css/profile.css';
import { useEffect, useState } from 'react';
import { getUserInfosAsync } from '../services/UserService';

const Profile = () => {
  // Kullanıcı bilgilerini burada alabilirsiniz
  // const user = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   email: 'johndoe@example.com',
  //   userName: '123 Main St',
  //   footPrint: 123,
  //   footPrintReduction: 123,
  // };
  const [userInfos, setUserInfos] = useState({});
  
  useEffect(() => {
    const fetchUserInfos = async () => {
      try {
        const response = await getUserInfosAsync();
        console.log(response);
        setUserInfos(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };
  
    fetchUserInfos();
  }, []);
  
  

  return (
    <div>
      <h2 className='foot-print-title'>User Info</h2>
      {/* {footPrintMessages.map((message, index) => ( */}
        <div>
          <p className='foot-print-message'>
            <span
              style={{
                color: 'white',
                display: 'block',
              }}
            >
              Name: {userInfos.firstName}
            </span>
          </p>
        </div>
        <div>
          <p className='foot-print-message'>
            <span
              style={{
                color: 'white',
                display: 'block',
              }}
            >
              Last Name: {userInfos.lastName}
            </span>
          </p>
        </div>
        <div>
          <p className='foot-print-message'>
            <span
              style={{
                color: 'white',
                display: 'block',
              }}
            >
              Email: {userInfos.email}
            </span>
          </p>
        </div>
        <div>
          <p className='foot-print-message'>
            <span
              style={{
                color: 'white',
                display: 'block',
              }}
            >
              Username: {userInfos.userName}
            </span>
          </p>
        </div>
        <div>
          <p className='foot-print-message'>
            <span
              style={{
                color: 'white',
                display: 'block',
              }}
            >
              Footprint: {userInfos.footPrint} per year
            </span>
          </p>
        </div>
        <div>
          <p className='foot-print-message'>
            <span
              style={{
                color: 'white',
                display: 'block',
              }}
            >
              Footprint Reduction: {userInfos.footPrintReduction} ton
            </span>
          </p>
        </div>
      {/* ))} */}
    </div>
  );
};

export default Profile;
