import { Box, Image, Flex, Divider, Collapse, Button } from "@chakra-ui/react";
import styles from "./PetCard.module.scss";
import { MdPlace } from "react-icons/md";
import LabelBox from "../LabelBox/LabelBox";
import Shelter from "../Shelter/Shelter";
import { ageConverter, sexConverter } from "@app/utils/converter";

interface Props {
  id: number;
  subId: string;
  kind: string;
  sex: PetSexType;
  color: string;
  place: string;
  img: string;
  age: PetAgeType;
  phone: string;
  address: string;
  remark: string;
}
const PetCard = ({
  id,
  subId,
  // kind,
  sex,
  color,
  place,
  img,
  age,
  phone,
  address,
  remark,
}: Props) => {
  const details = [
    { label: "性別", value: sexConverter(sex) },
    { label: "年齡", value: ageConverter(age) },
    { label: "顏色", value: color },
  ];
  return (
    <Box className={styles.petCard}>
      <Image src={img} alt={id.toString()} className={styles.petCard__avatar} />

      <Box className={styles.petCard__desc}>
        <span className={styles.petCard__title}>{subId}</span>
        <Flex className={styles.petCard__placeWrap}>
          <MdPlace className={styles.petCard__placeIcon} />
          <span className={styles.petCard__placeText}>{place}</span>
        </Flex>

        <Flex className={styles.petCard__detailWrap}>
          {details.map(ele => (
            <LabelBox key={ele.label} label={ele.label} value={ele.value} />
          ))}
        </Flex>

        <Box>
          <Shelter place={place} phone={phone} address={address} />
        </Box>
        <Divider />
        <Collapse startingHeight={40} className={styles.petCard__remark}>
          {remark}
        </Collapse>
        <Button className={styles.petCard__adoptButton}>領養我</Button>
      </Box>
    </Box>
  );
};

export default PetCard;
