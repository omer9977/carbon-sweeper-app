import React from 'react';
import '../css/profile.css';
import { useEffect } from 'react';
import { getUserInfosAsync } from '../services/UserService';

const Profile = () => {
  // Kullanıcı bilgilerini burada alabilirsiniz
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    address: '123 Main St',
  };

  useEffect( async () => {
    var response = await getUserInfosAsync(); 
    console.log(response);
  }, [])
  

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
              Name: {user.firstName}
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
              Last Name: {user.lastName}
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
              Email: {user.email}
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
              {user.address}
            </span>
          </p>
        </div>
      {/* ))} */}
    </div>
  );
};

export default Profile;
