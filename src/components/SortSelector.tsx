import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const SortSelector = () => {
	const { data, error } = usePlatforms();
	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: Relevant
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date Added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release Date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average Rating</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
