import { useState } from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { truncate } from "../../utils/reusableFunctions";

const TxnData = () => {
  const [show, setShow] = useState({
    inputs: false,
    outputs: false,
    witness: false,
  });

  return (
    <>
      <Box
        borderWidth={"1px"}
        borderRadius={"3px"}
        borderColor={"brandBone.500"}
        padding={"0.5rem"}
        pos={"relative"}
        margin={"1.5rem 0 0.5rem 0"}
        w={"100%"}
      >
        <Text
          color={"brandBone.500"}
          pos={"absolute"}
          top={"-7%"}
          left={"3%"}
          bg={"brandGrey.400"}
          padding={"0 0.25rem"}
          fontFamily={"Body-SemiBold"}
        >
          Inputs and Outputs
        </Text>
        <Box padding={"0.5rem 0"}>
          <Text color={"brandBone.500"} marginBottom={"0.25rem"}>
            Input(s)
            <TriangleDownIcon
              onClick={() => setShow({ ...show, inputs: !show.inputs })}
              color={"brandBone.400"}
              marginLeft={"0.35rem"}
              w={3}
              h={3}
              cursor={"pointer"}
              _hover={{
                color: "brandBone.500",
              }}
              _active={{
                color: "brandBone.500",
              }}
            />
          </Text>
          <Text
            as={"li"}
            // listStyleType={"lower-roman"}
            fontSize={"0.875rem"}
            bg="brandGrey.500"
            borderRadius={"3px"}
            color={"brandBone.400"}
            padding={"0.35rem 0.5rem"}
          >
            {show.inputs
              ? "6072efc612c69e6761667701409c91f3fc5108b7872997c829da676166e04986"
              : truncate(
                  "6072efc612c69e6761667701409c91f3fc5108b7872997c829da676166e04986",
                  43
                )}
          </Text>
        </Box>
        <Box padding={"0.5rem 0"}>
          <Text color={"brandBone.500"} marginBottom={"0.25rem"}>
            Output(s)
            <TriangleDownIcon
              onClick={() => setShow({ ...show, outputs: !show.outputs })}
              color={"brandBone.400"}
              marginLeft={"0.35rem"}
              w={3}
              h={3}
              cursor={"pointer"}
              _hover={{
                color: "brandBone.500",
              }}
              _active={{
                color: "brandBone.500",
              }}
            />
          </Text>
          <Text
            as={"li"}
            fontSize={"0.875rem"}
            bg="brandGrey.500"
            borderRadius={"3px"}
            color={"brandBone.400"}
            padding={"0.35rem 0.5rem"}
          >
            {show.outputs
              ? "6072efc612c69e6761667701409c91f3fc5108b7872997c829da676166e04986"
              : truncate(
                  "6072efc612c69e6761667701409c91f3fc5108b7872997c829da676166e04986",
                  43
                )}
          </Text>
        </Box>
        <Box padding={"0.5rem 0"}>
          <Text color={"brandBone.500"} marginBottom={"0.25rem"}>
            Witness hash
            <TriangleDownIcon
              onClick={() => setShow({ ...show, witness: !show.witness })}
              color={"brandBone.400"}
              marginLeft={"0.35rem"}
              w={3}
              h={3}
              cursor={"pointer"}
              _hover={{
                color: "brandBone.500",
              }}
              _active={{
                color: "brandBone.500",
              }}
            />
          </Text>
          <Text
            as={"li"}
            fontSize={"0.875rem"}
            bg="brandGrey.500"
            borderRadius={"3px"}
            color={"brandBone.400"}
            padding={"0.35rem 0.5rem"}
          >
            {show.witness
              ? "6072efc612c69e6761667701409c91f3fc5108b7872997c829da676166e04986"
              : truncate(
                  "6072efc612c69e6761667701409c91f3fc5108b7872997c829da676166e04986",
                  43
                )}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default TxnData;
