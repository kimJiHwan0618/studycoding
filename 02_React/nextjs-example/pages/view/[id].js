import { useRouter } from "next/router";
import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Item from "/src/component/Item";
import { Loader } from "semantic-ui-react";

const Post = ({ item, name }) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {name} 환경 입니다.
      {item && <Item item={item} />}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
