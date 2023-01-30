import '../styles/globals.css'
import "../styles/nprogress.css";
import nProgress from "nprogress";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Router from "next/router";


Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
}

export default MyApp
