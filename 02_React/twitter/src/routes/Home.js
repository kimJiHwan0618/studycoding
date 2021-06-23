import { dbService } from "fbase";
import React, { useState, useEffect } from "react";
import Nweet from "../components/Nweet";

const Home = ({ userObj }) => {
  console.log(userObj);
  const [tweet, setTweet] = useState("");
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("tweets").onSnapshot((snapshot) => {
      console.log("somethie happened");
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(tweetArray);
    });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("tweets").add({
      text: tweet,
      createdAt: Date.now(),
      createId: userObj.uid,
    });
    setTweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };
  console.log(nweets);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
          value={tweet}
        />
        <input type="submit" value="Tweet" />
      </form>
      <div>
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
