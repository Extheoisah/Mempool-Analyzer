import { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { truncate } from "../../utils/reusableFunctions";
import { AppContext } from "../../context";

const FirstDetails = () => {
  const { singleTxnData, singleTxnId }: any = useContext(AppContext);

  const timeStamp = new Date(singleTxnData?.time * 1000);
  let hours = timeStamp.getHours();
  let minutes = "0" + timeStamp.getMinutes();

  // Will display time in 10:30:23 format
  let formattedTime = hours + ":" + minutes.substr(-2);

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
            {truncate(singleTxnId)}
          </Text>
        </Box>
        <Text
          color={"brandBone.400"}
          fontFamily="Body-SemiBold"
          fontSize={"0.75rem"}
          bg={singleTxnData?.unbroadcast ? "brandRed" : "brandGreen.400"}
          borderRadius={"3px"}
          padding={"0.15rem 0.5rem"}
          textDecor={singleTxnData?.unbroadcast ? "line-through" : ""}
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
              {formattedTime}
            </Text>
          </Text>
          <Text color={"brandBone.500"}>
            Features:{" "}
            <Text
              as={"span"}
              fontFamily={"Body-SemiBold"}
              fontSize={"0.875rem"}
              color={"brandBone.400"}
              bg={
                singleTxnData?.["bip125-replaceable"]
                  ? "brandGreen.400"
                  : "brandRed.400"
              }
              padding={"0.15rem 0.5rem"}
              borderRadius={"3px"}
              textDecor={
                singleTxnData?.["bip125-replaceable"] ? "" : "line-through"
              }
            >
              RBF
            </Text>
            <Text
              as={"span"}
              fontFamily={"Body-SemiBold"}
              color={"brandBone.400"}
              bg={singleTxnData?.wtxid ? "brandGreen.400" : "brandRed.400"}
              padding={"0.15rem 0.5rem"}
              marginLeft={"0.5rem"}
              borderRadius={"3px"}
              textDecor={singleTxnData?.wtxid.length ? "" : "line-through"}
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
              {singleTxnData?.fees?.base*100000000} sat/vB
            </Text>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default FirstDetails;
