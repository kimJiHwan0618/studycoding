import { dbService } from "fbase";
import React, { useState, useEffect } from "react";
import Nweet from "../components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  // console.log(userObj);
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("tweets").onSnapshot((snapshot) => {
      // console.log("somethie happened");
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(tweetArray);
    });
  }, []);
  // console.log(nweets);
  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.createId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
