import { useState } from "react";
import { CloseIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Text, VStack, Flex } from "@chakra-ui/react";
import LoadingSpinner from "../LoadingSpinner";
import { motion } from "framer-motion";
import { truncate } from "../../utils/reusableFunctions";
import FirstDetails from "./firstDetails";
import TxnData from "./TxnData";
import OtherDetails from "./OtherDetails";

const MotionBox = motion(Box);

interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = (props: Props) => {
  const { openSideBar, setOpenSideBar, loading, setLoading } = props;

 
  return (
    <>
      {openSideBar && (
        <MotionBox
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          layout
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          bg={["brandGrey.400", null, null, null, "transparent"]}
          zIndex={"100"}
          pos={"fixed"}
          left={"0%"}
          //   margin={"0 auto 0 0"}
          top={"0"}
          bottom={"0"}
          w={["100%", "415px"]}
          padding={"1rem"}
        >
          <Box w={"100%"}>
            {/* Close side bar */}
            <VStack>
              <CloseIcon
                onClick={() => {
                  setOpenSideBar(false), setLoading(false);
                }}
                color={"brandBone.400"}
                borderWidth={"1px"}
                borderRadius={"50%"}
                padding={"0.75rem"}
                width={"40px"}
                h={"40px"}
                cursor={"pointer"}
                _hover={{
                  color: "brandBone.500",
                  bg: "brandBone.400",
                  borderWidth: "2px",
                  borderColor: "brandBone.500",
                }}
              />
            </VStack>

            {/* Transaction details */}
            <FirstDetails/>

            {/* Transaction data */}
           <TxnData/>

            {/* Other txn data */}
            <OtherDetails/>

            {!loading && <LoadingSpinner />}
          </Box>
        </MotionBox>
      )}
    </>
  );
};

export default SideBar;
