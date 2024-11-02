import styles from "./Shelter.module.scss";
import { Avatar, Collapse, Flex, Text } from "@chakra-ui/react";
interface Props {
  place: string;
  address: string;
  phone: string;
}
const Shelter = ({ place, address, phone }: Props) => {
  return (
    <Flex className={styles.shelterWrap}>
      <Avatar
        src='https://bit.ly/broken-link'
        className={styles.shelterWrap__avatar}
        name={place.substring(0, 2).split("").join(" ")}
      />
      <Flex className={styles.shelterWrap__detail}>
        <Collapse startingHeight={18} className={styles.shelterWrap__address}>
          {address.substring(0, 18)}
        </Collapse>
        <Text className={styles.shelterWrap__phone}>{phone}</Text>
      </Flex>
    </Flex>
  );
};

export default Shelter;
