/* eslint-disable @next/next/no-img-element */
import { Header } from "semantic-ui-react";
import { useEffect, useState } from "react";
import styles from "./styles/Item.module.css";

export default function Item({ item }) {
  const {
    image_link,
    name,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{name}</strong>
          <strong className={styles.num_price}>${price}</strong>
          <span className={styles.txt_info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          <button>구매하기</button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBaottom: 20, fontSize: 18 }}>{description} </p>
    </>
  );
}
// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/477/original/open-uri20171223-4-1m8bc4v?1514063328"
// brand: "maybelline"
// category: null
// created_at: "2016-10-01T18:35:40.504Z"
// currency: null
// description: "Maybelline Facestudio Master Contour Kit is the ultimate on the go all-in-one palette, with contouring brush included.  Define and highlight in a New York minute with this effortless 3-step face contouring kit.  This easy-to-use 3-step face contouring kit features a bronzer, blush and highlighter."
// id: 477
// image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/4f731de249cbd4cb819ea7f5f4cfb5c3_ra,w158,h184_pa,w158,h184.png"
// name: "Maybelline Facestudio Master Contour Kit"
// price: "15.99"
// price_sign: null
// product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/477.json"
// product_colors: (3) [{…}, {…}, {…}]
// product_link: "https://well.ca/products/maybelline-facestudio-master-contour_120303.html?cat=328"
// product_type: "bronzer"
// rating: null
// tag_list: []
// updated_at: "2017-12-23T21:08:48.157Z"
// website_link: "https://well.ca"
