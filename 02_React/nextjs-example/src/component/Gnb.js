import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  let activeItem;
  const router = useRouter();
  console.log(router);

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "active";
  }

  const goLink = (e, data) => {
    switch (data.name) {
      case "home":
        router.push("/");
        break;

      case "about":
        router.push("/about");
        break;
    }
  };

  return (
    <div>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
        <Menu.Item
          name="contact"
          active={activeItem === "contact"}
          onClick={() => {
            router.push("/contact");
          }}
        />
      </Menu>
    </div>
  );
}
