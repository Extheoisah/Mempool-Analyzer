import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../Components/Header";
import SearchTxn from "../Components/SearchTxn";
import TxnFeeRate from "../Components/TxnFeeRate";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box bg={"brandGrey.400"}>
      <Head>
        <title>Mempool Analyzer</title>
        <meta name="description" content="Mempool observer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box maxW={"1024px"} margin="0 auto" minH={"100vh"} bg={"brandBone.400"}>
        <Header />
        <Flex
        flexDir={["column", null, "row"]}
          align={"start"}
          justify="space-between"
          columnGap={"5rem"}
          rowGap={"1rem"}
          padding={"2rem 1rem"}
        >
          <TxnFeeRate />
          <SearchTxn />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
