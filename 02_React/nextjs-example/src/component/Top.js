/* eslint-disable @next/next/no-img-element */
import { Header } from "semantic-ui-react";
import Image from "next/image";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20, paddingBottom: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">김지환</Header>
      </div>
      <Gnb />
    </div>
  );
}
