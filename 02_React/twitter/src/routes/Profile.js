import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("tweets")
      .where("createId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    console.log(nweets.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyNweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSubmit = async (evt) => {
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  const onChange = (evt) => {
    const {
      target: { value },
    } = evt;
    console.log(value);
    setNewDisplayName(value);
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          type="text"
          onChange={onChange}
          value={newDisplayName}
          placeholder="Display name"
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span onClick={onLogOutClick} className="formBtn cancelBtn logOut">
        Log Out
      </span>
    </div>
  );
};
export default Profile;
