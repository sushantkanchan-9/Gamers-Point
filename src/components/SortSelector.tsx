import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameStore from "../store";

const SortSelector = () => {
  const sortOrder = useGameStore((s) => s.gameQuery.sortOrder);
  const onSelectSortOrder = useGameStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSort = sortOrders.find((so) => so.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By : {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((so) => (
          <MenuItem
            onClick={() => onSelectSortOrder(so.value)}
            key={so.value}
            value={so.value}
          >
            {so.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
