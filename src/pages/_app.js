// pages/_app.tsx or pages/_app.js
import "../styles/globals.css";
import WalletContextProvider from "../../contexts/walletconnect";

function MyApp({ Component, pageProps }) {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />;
    </WalletContextProvider>
  );
}

export default MyApp;
