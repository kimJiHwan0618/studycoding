/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Grid } from "semantic-ui-react";
import styles from "./styles/ItemList.module.css";
import Link from "next/link";

export default function ItemList({ list }) {
  console.log(styles);
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <a>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <p className={styles.tit_item}>{item.name}</p>
                    <p className={styles.txt_info}>
                      {item.category} {item.product_type}
                    </p>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
