import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Fonts from "../Components/Fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
