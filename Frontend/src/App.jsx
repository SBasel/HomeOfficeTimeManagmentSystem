import { useState } from 'react';
import LoginComponent from './comp/LoginComponent';
import UserComponent from './comp/UserComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginComponent onLoginSuccess={handleLoginSuccess} />
      ) : (
        <UserComponent />
      )}
    </div>
  );
}

export default App;




