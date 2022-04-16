import {} from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { truncate } from "../../utils/reusableFunctions";

const FirstDetails = () => {
  return (
    <>
      <Flex justify={"space-between"} align={"flex-end"} margin={"1.5rem 0"}>
        {/* txn details */}
        <Box>
          <Text
            color={"brandBone.500"}
            fontFamily={"Body-SemiBold"}
            marginBottom={"0.5rem"}
          >
            Transaction id
          </Text>
          <Text
            as={"span"}
            fontSize={"0.875rem"}
            color={"brandBone.400"}
            borderWidth={"1px"}
            borderColor={"brandBone.500"}
            borderRadius={"3px"}
            padding="0.5rem"
          >
            {truncate(
              "fa09f22a45f55c7fc9ec8bb9469c89018a5543ea220d33a236e99dbfc4a42f96"
            )}
          </Text>
        </Box>
        <Text
          color={"brandBone.400"}
          fontFamily="Body-SemiBold"
          fontSize={"0.875rem"}
          bg={"brandGreen.400"}
          borderRadius={"3px"}
          padding={"0.15rem 0.5rem"}
        >
          Confirmed
        </Text>
      </Flex>

      {/* first data */}
      <Flex
        justify={"space-between"}
        borderWidth={"1px"}
        borderColor={"brandBone.500"}
        borderRadius={"3px"}
        padding={"0.5rem"}
        margin={"1.5rem 0"}
      >
        <Box>
          <Text marginBottom={"0.875rem"} color={"brandBone.500"}>
            Time stamp:{" "}
            <Text
              as={"span"}
              color={"brandBone.400"}
              fontFamily={"Body-Medium"}
            >
              12:00PM
            </Text>
          </Text>
          <Text color={"brandBone.500"}>
            Features:{" "}
            <Text
              as={"span"}
              fontFamily={"Body-SemiBold"}
              fontSize={"0.875rem"}
              color={"brandBone.400"}
              bg={"brandGreen.400"}
              padding={"0.15rem 0.5rem"}
              borderRadius={"3px"}
            >
              RBF
            </Text>
            <Text
              as={"span"}
              fontFamily={"Body-SemiBold"}
              color={"brandBone.400"}
              bg={"brandGreen.400"}
              padding={"0.15rem 0.5rem"}
              marginLeft={"0.5rem"}
              borderRadius={"3px"}
            >
              Segwit
            </Text>
          </Text>
        </Box>
        <Box>
          <Text color={"brandBone.500"}>
            Fee:{" "}
            <Text
              as={"span"}
              color={"brandBone.400"}
              fontFamily={"Body-Medium"}
            >
              4 sat/vB
            </Text>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default FirstDetails;
