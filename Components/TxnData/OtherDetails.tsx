import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AppContext } from "../../context";

const OtherDetails = () => {
  const { singleTxnData }: any = useContext(AppContext);

  return (
    <>
      <Box
        borderWidth={"1px"}
        borderRadius={"3px"}
        borderColor={"brandBone.500"}
        padding={"0.5rem"}
        pos={"relative"}
        marginTop={"1.5rem"}
        w={"100%"}
      >
        <Text
          color={"brandBone.500"}
          pos={"absolute"}
          top={"-10%"}
          left={"3%"}
          bg={"brandGrey.400"}
          padding={"0 0.25rem"}
          fontFamily={"Body-SemiBold"}
        >
          Others
        </Text>
        <Box marginTop={"1rem"}>
          <Flex align={"center"} columnGap={"1rem"} marginBottom={"0.5rem"}>
            <Text color={"brandBone.500"} fontFamily={"Body-Medium"}>
              Height:
            </Text>
            <Text
              fontSize={"0.875rem"}
              color={"brandBone.400"}
              fontFamily={"Body-SemiBold"}
            >
              {singleTxnData?.height}
            </Text>
          </Flex>
          <Flex align={"center"} columnGap={"1rem"} marginBottom={"0.5rem"}>
            <Text color={"brandBone.500"} fontFamily={"Body-Medium"}>
              Weight:
            </Text>
            <Text
              fontSize={"0.875rem"}
              color={"brandBone.400"}
              fontFamily={"Body-SemiBold"}
            >
               {singleTxnData?.weight}
            </Text>
          </Flex>
          <Flex align={"center"} columnGap={"1rem"} marginBottom={"0.5rem"}>
            <Text color={"brandBone.500"} fontFamily={"Body-Medium"}>
              Virtual size:
            </Text>
            <Text
              fontSize={"0.875rem"}
              color={"brandBone.400"}
              fontFamily={"Body-SemiBold"}
            >
               {singleTxnData?.vsize}
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default OtherDetails;
