import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Theme from "../styles/theme";
import GNB from "../common/global/GNB";
import store from "../redux/store";
import "material-icons/iconfont/material-icons.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <GNB />
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}
