import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";
import Item from "/src/component/Item";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  console.log(item);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  };

  useEffect(() => {
    id && id > 0 && getData();
  }, [id]);

  return <Item item={item} />;
};

export default Post;
