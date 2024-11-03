import styles from "./LabelBox.module.scss";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string;
  prefix?: string;
}
const LabelBox = ({ label, value, prefix }: Props) => {
  return (
    <Flex className={styles.labelBox}>
      <Text className={styles.labelBox__heading}>{label}</Text>
      <Text
        className={`${styles.labelBox__value} ${
          prefix ? styles["labelBox__value--prefix"] : ""
        }`}
      >
        {value.substring(0, 3)}
        {prefix && (
          <span className={styles.labelBox__prefix}>{prefix}</span>
        )}{" "}
      </Text>
    </Flex>
  );
};

export default LabelBox;
