import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*  As Navbar is used in every page therefore I have put it in this file  */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
