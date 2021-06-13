import { useState } from "react";
import AppRouter from "components/Router";
import fbase from "fbase";

function App() {
  const auth = fbase.auth();
  console.log(auth.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
