import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";
// import StyledComponentTest from "../src/component/StyleCompoentTest";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
      {/* <StyledComponentTest /> */}
    </div>
  );
}

export default MyApp;
