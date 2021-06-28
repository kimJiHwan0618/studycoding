import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import Nweet from "../components/Nweet";

const Home = ({ userObj }) => {
  // console.log(userObj);
  const [tweet, setTweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState("");

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
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await fileRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: tweet,
      createdAt: Date.now(),
      createId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("tweets").add(nweetObj);
    setTweet("");
    setAttachment("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const clearAttachment = (evt) => setAttachment(null);
  // console.log(nweets);
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
        <input type="file" onChange={onFileChange} accept="image/*" />
        <input type="submit" value="Tweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" alt="testImg" />
            <button onClick={clearAttachment}>Cancel upload</button>
          </div>
        )}
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
