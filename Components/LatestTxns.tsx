import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../context";
import { truncate } from "../utils/reusableFunctions";

const LatestTxns = () => {
  const { txnIdList }: any = useContext(AppContext);
  const [show, setShow] = useState(false);

  const slicedList = txnIdList.slice(0, 10);
  return (
    <Box padding={""}>
      <Heading color={"brandGrey.400"} fontSize={"1rem"} textAlign={"left"}>
        Latest transactions
      </Heading>
      <Box
        margin={"0.5rem 0"}
        borderRadius={"3px"}
        padding={"0.75rem"}
        boxShadow={"base"}
      >
        {txnIdList.length > 0 ? (
          !show ? (
            slicedList.map((txn_id: string, index: number) => (
              <Flex
                key={txn_id}
                margin={"0.5rem 0"}
                align={"center"}
                columnGap={"0.75rem"}
              >
                <Text color={"brandGrey.300"}>{`${index + 1}.`}</Text>

                {/* For mobile screens */}
                <Text
                  as={"li"}
                  d={["initial", null, null, "none"]}
                  color={"brandGrey.500"}
                  fontFamily={"Body-Medium"}
                  listStyleType="decimal-leading-zero"
                  marginLeft={"auto"}
                >
                  {truncate(txn_id)}
                </Text>
                {/* For desktop screens only */}
                <Text
                  as={"li"}
                  d={["none", null, null, "initial"]}
                  color={"brandGrey.500"}
                  fontFamily={"Body-Medium"}
                  listStyleType="decimal-leading-zero"
                  marginLeft={"auto"}
                  _hover={{
                    textDecor: "underline",
                    color: "brandBone.500",
                    cursor: "pointer",
                  }}
                >
                  {truncate(txn_id, 47)}
                </Text>
              </Flex>
            ))
          ) : (
            txnIdList.map((txn_id: string, index: number) => (
              <Flex
                key={txn_id}
                margin={"0.5rem 0"}
                align={"center"}
                columnGap={"0.75rem"}
              >
                <Text color={"brandGrey.300"}>{`${index + 1}.`}</Text>

                {/* For mobile screens */}
                <Text
                  as={"li"}
                  d={["initial", null, null, "none"]}
                  color={"brandGrey.500"}
                  fontFamily={"Body-Medium"}
                  listStyleType="decimal-leading-zero"
                  marginLeft={"auto"}
                >
                  {truncate(txn_id)}
                </Text>
                {/* For desktop screens only */}
                <Text
                  as={"li"}
                  d={["none", null, null, "initial"]}
                  color={"brandGrey.500"}
                  fontFamily={"Body-Medium"}
                  listStyleType="decimal-leading-zero"
                  marginLeft={"auto"}
                >
                  {truncate(txn_id, 45)}
                </Text>
              </Flex>
            ))
          )
        ) : (
          <Text
            textAlign={"center"}
            color={"brandBone.500"}
            fontFamily={"Body-SemiBold"}
          >
            No data
          </Text>
        )}
        {!show && txnIdList.length > 0 && txnIdList.length > 10 && (
          <Text onClick={() => setShow(!show)}>
            {show ? "see less" : "see more..."}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default LatestTxns;
