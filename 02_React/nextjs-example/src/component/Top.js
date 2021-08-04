import { Header } from "semantic-ui-react";
import Image from "next/image";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <Image src="/images/logo.png" width="60" height="60" alt="Logo" />
      <Header as="h1">김지환</Header>
      <Gnb />
    </div>
  );
}
