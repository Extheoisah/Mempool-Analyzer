import { useContext, useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";

import Header from "../Components/Header";
import SearchTxn from "../Components/SearchTxn";
import TxnFeeRate from "../Components/TxnFeeRate";
import SideBar from "../Components/TxnData/SideBar";
import { AnimatePresence, motion } from "framer-motion";
import axios from "../axios/axios";
import { AppContext } from "../context";
import LatestTxns from "../Components/LatestTxns";

const MotionBox = motion(Box);

const Home: NextPage = ({ rawData, error }: any) => {
  const { setTxnIdList, setTxnData }: any = useContext(AppContext);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTxnIdList(Object.keys(rawData?.txn_ids));
    setTxnData(Object.values(rawData?.txn_ids));
  }, [rawData, setTxnIdList, setTxnData, error]);

  return (
    <Box bg={"brandGrey.400"}>
      <Head>
        <title>Mempool Analyzer</title>
        <meta name="description" content="Mempool observer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotionBox
        initial={{
          x: "-100%",
        }}
        animate={{
          x: "0",
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.5,
          ease: "easeIn",
          layout: { duration: 0.3 },
        }}
        maxW={"1024px"}
        margin={openSideBar ? "0 0 0 auto" : "0 auto"}
        minH={"100vh"}
        bg={"brandBone.400"}
      >
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
          <SearchTxn
            setOpenSideBar={setOpenSideBar}
            loading={loading}
            setLoading={setLoading}
          />
        </Flex>
        <Flex
          flexDir={["column", null, "row"]}
          align={"start"}
          justify="space-between"
          columnGap={"5rem"}
          rowGap={"1rem"}
          padding={"2rem 1rem"}
        >
          <LatestTxns />
          <Box>hi</Box>
        </Flex>
      </MotionBox>
      <AnimatePresence>
        {openSideBar && (
          <SideBar
            openSideBar={openSideBar}
            setOpenSideBar={setOpenSideBar}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("mempool-data");
  const data = await res?.data;
  if (!data) {
    return { notFound: true };
  }
  // let data;
  // try {
  //   const res = await axios.get("mempool-data");
  //   data = await res?.data;
  //   return {
  //     props: {
  //       rawData: data,
  //     },
  //   };
  // } catch (error) {
  //   console.log(error);
  //   let err = new Error("Connection Failed!");
  //   return {
  //     props: {
  //       rawData: [],
  //       error: err,
  //     },
  //   };
  // }

  // setInterval(() => {
  //   getServerSideProps(context);
  // }, 1200000);

  return {
    props: {
      rawData: data,
    },
  };
};
