import '../styles/globals.css'
import "../styles/nprogress.css";
import nProgress from "nprogress";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
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
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
