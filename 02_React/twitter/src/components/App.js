import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인이나 로그아웃 할때, 또는 어플리케이션이 초기화 될 때
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
        // setIsLoggedIn(true);
        // 로그인이 됬을떄
        // 로그인이 됬다면 user를 사용
      }
      // else {
      // setUserObj(false);
      // setIsLoggedIn(false);
      // }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
