import {
  Box,
  Image,
  Flex,
  Divider,
  Collapse,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import styles from "./PetCard.module.scss";
import { MdPlace } from "react-icons/md";
import LabelBox from "../LabelBox/LabelBox";
import Shelter from "../Shelter/Shelter";
import {
  ageConverter,
  bodyConverter,
  sexConverter,
  ternaryConverter,
} from "@app/utils/converter";

interface Props {
  isLoading: boolean;
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
  bodyType: PetBodyType;
  bacterin: TernaryType;
  sterilization: TernaryType;
}
const PetCard = ({
  isLoading,
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
  bodyType,
  bacterin,
  sterilization,
}: Props) => {
  const details = [
    { label: "性別", value: sexConverter(sex) },
    { label: "年齡", value: ageConverter(age) },
    { label: "顏色", value: color },
  ];
  const genDetail = `${remark ? `${remark}；` : ""}體型為${bodyConverter(
    bodyType
  )}；${ternaryConverter(bacterin)}施打狂犬病疫苗；${ternaryConverter(
    sterilization
  )}絕育`;
  return (
    <Skeleton isLoaded={!isLoading} className={styles.loading}>
      <Box className={styles.petCard}>
        <Image
          src={img === "" ? "/imgs/no-pic.svg" : img}
          alt={id.toString()}
          className={styles.petCard__avatar}
        />

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
            {genDetail}
          </Collapse>
          <Button className={styles.petCard__adoptButton}>
            <a
              className={styles.petCard__adoptLink}
              target='_blank'
              href={`https://www.pet.gov.tw/AnimalApp/AnnounceSingle.aspx?PageType=Adopt&AcNum=${Buffer.from(
                subId
              ).toString("base64")}&UT=TEFBQUc=`}
            >
              領養我
            </a>
          </Button>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default PetCard;
