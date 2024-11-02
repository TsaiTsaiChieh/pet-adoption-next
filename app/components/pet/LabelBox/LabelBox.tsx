import styles from "./LabelBox.module.scss";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string;
}
const LabelBox = ({ label, value }: Props) => {
  return (
    <Flex className={styles.labelBox}>
      <Text className={styles.labelBox__heading}>{label}</Text>
      <Text className={styles.labelBox__value}>{value.substring(0, 3)}</Text>
    </Flex>
  );
};

export default LabelBox;
