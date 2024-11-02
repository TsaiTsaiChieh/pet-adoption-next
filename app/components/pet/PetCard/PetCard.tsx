import styles from "./PetCard.module.scss";
import {
  Box,
  Flex,
  Divider,
  Collapse,
  Button,
  Skeleton,
  ScaleFade,
} from "@chakra-ui/react";
import { MdPlace } from "react-icons/md";
import LabelBox from "@app/components/pet/LabelBox/LabelBox";
import Shelter from "@app/components/pet/Shelter/Shelter";
import {
  ageConverter,
  bodyConverter,
  kindConverter,
  sexConverter,
  ternaryDetailConverter,
  ternarySimpleConverter,
} from "@app/utils/converter";
import { textClearUp } from "@app/utils/utils";
import Avatar from "@app/components/pet/Avatar/Avatar";

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
  updateDate: string;
}
const PetCard = ({
  isLoading,
  id,
  subId,
  kind,
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
  updateDate,
}: Props) => {
  const details = [
    { label: "性別", value: sexConverter(sex) },
    { label: "年齡", value: ageConverter(age) },
    { label: "結育", value: ternarySimpleConverter(sterilization) },
  ];
  const petBody = bodyConverter(bodyType);
  const petKind = kindConverter(kind);
  const title = `${textClearUp(color)}${petBody}${petKind}`;
  const genDetail = `${updateDate} 更新。${remark} ${
    bacterin !== "N" ? `${ternaryDetailConverter(bacterin)}打疫苗` : ""
  }`;

  return (
    <Skeleton isLoaded={!isLoading} className={styles.loading}>
      <ScaleFade in={!isLoading} initialScale={0.95}>
        <Box className={styles.petCard}>
          <Avatar src={img} alt={id.toString()} />
          <Box className={styles.petCard__desc}>
            <span className={styles.petCard__title}>{title}</span>
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
            <Button className='primary-btn'>
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
      </ScaleFade>
    </Skeleton>
  );
};

export default PetCard;
