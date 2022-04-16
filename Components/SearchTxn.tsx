import {} from "react";
import {
  Box,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface Props {
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchTxn = ({ setOpenSideBar, loading, setLoading }: Props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (loading) return
    setLoading(true)
    
    setOpenSideBar(true);
  };

  return (
    <Box width={"100%"}>
      <Heading fontSize={"1rem"} textAlign={"left"}>
        Search
      </Heading>
      <FormControl margin={"0.5rem 0"} onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            borderColor={"brandBone.500"}
            placeholder="Enter transaction id"
            _placeholder={{
              fontFamily: "Body-Regular",
              color: "brandGrey.300",
            }}
          />
          <InputRightElement
          onClick={handleSubmit}
            cursor={"pointer"}
            bg={"brandBone.500"}
            borderTopRightRadius={"3px"}
            borderBottomRightRadius={"3px"}
            outlineColor={"brandGrey.400"}
            _hover={{
              bg: "brandBone.600",
            }}
            _active={{
              bg: "brandBone.600",
            }}
            _focus={{
              bg: "brandBone.600",
            }}
          >
            <Search2Icon color={"brandGrey.100"} />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default SearchTxn;
