import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import Theme from "../styles/theme";
import GNB from "../common/global/GNB";
import store from "../redux/store";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <Theme>
        <GNB />
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}
