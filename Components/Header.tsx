import {} from "react";
import { Flex, Heading, HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex align={"center"} justify={"center"} padding={"2rem 0"} boxShadow='lg' bg={"brandBone.400"}>
      <Heading fontSize={"1.5rem"}>| Mempool Analyzer |</Heading>
    </Flex>
  );
};

export default Header;
