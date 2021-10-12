import { useState, useEffect } from "react";
import CompleteNavBar from "./components/navigation/CompleteNavBar";
import { ToastContainer } from "react-toastify";
import { getMeData } from "./helpers/fetcher";

function App() {
  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails);
  useEffect(() => {
    getMeData(localStorage.getItem("token"), (data) => {
      setUserDetails(data);
    });
  }, []);

  return (
    <>
      <CompleteNavBar user={userDetails} set={setUserDetails} />
      <ToastContainer />
    </>
  );
}

export default App;
