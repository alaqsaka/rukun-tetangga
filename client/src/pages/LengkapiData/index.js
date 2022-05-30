/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LengkapiData = () => {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    //const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div>
      {user.result.role == 'ketua' ? (
        <div>lengkapi data untuk ketua</div>
      ) : (
        user.result.role == 'warga' && <div>lengkapi data untuk warga</div>
      )}
    </div>
  );
};

export default LengkapiData;
