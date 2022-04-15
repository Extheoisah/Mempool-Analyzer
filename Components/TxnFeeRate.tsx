import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {} from "react";

const TxnFeeRate = () => {
  return (
    <Box width={"100%"}>
      <Heading color={"brandGrey.400"} fontSize={"1rem"} textAlign={"left"}>
        Transaction Fee Rate
      </Heading>
      <Flex
        margin={"0.5rem 0"}
        borderRadius={"3px"}
        align={"center"}
        justify={"space-evenly"}
        // borderWidth={"1px"}
        // borderColor={"brandBone.500"}
        padding={"0.75rem 0"}
        boxShadow={"base"}
      >
        <Flex align={"center"} rowGap={"1rem"} flexDir={"column"}>
          <Text
            fontFamily={"Body-SemiBold"}
            color={"brandGrey.400"}
            _hover={{
              textDecor: "underline",
            }}
          >
            Highest
          </Text>
          <Text fontFamily={"Body-Medium"} color={"brandGrey.400"}>
            4 <Text as={"span"} color={"rgb(167, 117, 77)"}>sat/vB</Text>
          </Text>
        </Flex>
        <Flex align={"center"} rowGap={"1rem"} flexDir={"column"}>
          <Text
            fontFamily={"Body-SemiBold"}
            color={"brandGrey.400"}
            _hover={{
              textDecor: "underline",
            }}
          >
            Average
          </Text>
          <Text fontFamily={"Body-Medium"} color={"brandGrey.400"}>
            4 <Text as={"span"} color={"rgb(167, 117, 77)"}>sat/vB</Text>
          </Text>
        </Flex>
        <Flex align={"center"} rowGap={"1rem"} flexDir={"column"}>
          <Text
            fontFamily={"Body-SemiBold"}
            color={"brandGrey.400"}
            _hover={{
              textDecor: "underline",
            }}
          >
            Lowest
          </Text>
          <Text fontFamily={"Body-Medium"} color={"brandGrey.400"}>
            4 <Text as={"span"} color={"rgb(167, 117, 77)"}>sat/vB</Text>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TxnFeeRate;
