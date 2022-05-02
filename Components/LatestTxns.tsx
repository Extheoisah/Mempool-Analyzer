import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AppContext } from "../context";
import { truncate } from "../utils/reusableFunctions";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const LatestTxns = (props: Props) => {
  const { loading, setLoading, setOpenSideBar } = props;
  const { txnIdList, getSingleTxnData }: any = useContext(AppContext);
  const [show, setShow] = useState(false);

  const slicedList = txnIdList.slice(0, 10);

  const handleClick = (txn_id: string) => {
    if (loading) return;
    setLoading(true);
    getSingleTxnData(txn_id);
    setOpenSideBar(true);
    setLoading(false);
  };

  return (
    <MotionBox layout>
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
              <MotionFlex
                key={txn_id}
                margin={"0.5rem 0"}
                align={"center"}
                columnGap={"0.75rem"}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  layout: { duration: 0.3 },
                }}
              >
                <Text color={"brandGrey.300"}>{`${index + 1}.`}</Text>

                {/* For mobile screens */}
                <Text
                  onClick={() => handleClick(txn_id)}
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
                  onClick={() => handleClick(txn_id)}
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
              </MotionFlex>
            ))
          ) : (
            txnIdList.map((txn_id: string, index: number) => (
              <MotionFlex
                key={txn_id}
                margin={"0.5rem 0"}
                align={"center"}
                columnGap={"0.75rem"}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  layout: { duration: 0.3 },
                }}
              >
                <Text color={"brandGrey.300"}>{`${index + 1}.`}</Text>

                {/* For mobile screens */}
                <Text
                  onClick={() => handleClick(txn_id)}
                  as={"li"}
                  d={["initial", null, null, "none"]}
                  color={"brandGrey.500"}
                  fontFamily={"Body-Medium"}
                  listStyleType="decimal-leading-zero"
                  marginLeft={"auto"}
                  cursor={"pointer"}
                >
                  {truncate(txn_id)}
                </Text>
                {/* For desktop screens only */}
                <Text
                  onClick={() => handleClick(txn_id)}
                  as={"li"}
                  d={["none", null, null, "initial"]}
                  color={"brandGrey.500"}
                  fontFamily={"Body-Medium"}
                  listStyleType="decimal-leading-zero"
                  marginLeft={"auto"}
                  cursor={"pointer"}
                  _hover={{
                    textDecor: "underline",
                    color: "brandBone.500",
                    cursor: "pointer",
                  }}
                >
                  {truncate(txn_id, 45)}
                </Text>
              </MotionFlex>
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
        {!show && txnIdList.length > 0 && txnIdList.length > 10 ? (
          <Text
            onClick={() => setShow(!show)}
            textAlign={"center"}
            color={"brandBone.500"}
            fontFamily={"Body-Medium"}
            cursor={"pointer"}
          >
            see more...
          </Text>
        ) : (
          <Text
            onClick={() => setShow(!show)}
            textAlign={"center"}
            color={"brandBone.500"}
            fontFamily={"Body-Medium"}
            cursor={"pointer"}
          >
            see less
          </Text>
        )}
      </Box>
    </MotionBox>
  );
};

export default LatestTxns;
