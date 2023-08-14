import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchString: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (searchRef.current) {
            onSearch(searchRef.current.value);
            // console.log(searchRef.current.value);
          }
        }}
      >
        <InputGroup>
          <InputLeftElement>
            <BsSearch></BsSearch>
          </InputLeftElement>
          <Input
            ref={searchRef}
            borderRadius={20}
            placeholder="Search Games..."
            variant={"filled"}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
