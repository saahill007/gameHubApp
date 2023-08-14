import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onselectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onselectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platform"}
        </MenuButton>
        <MenuList>
          {data.map((d) => (
            <MenuItem key={d.id} onClick={() => onselectPlatform(d)}>
              {d.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
