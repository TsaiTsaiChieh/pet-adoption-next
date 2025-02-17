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
import LabelBox from "@app/components/pet/LabelBox/LabelBox";
import Shelter from "@app/components/pet/Shelter/Shelter";
import {
  ageConverter,
  bodyConverter,
  kindConverter,
  sexConverter,
  ternaryConverter,
} from "@app/utils/converter";
import { calcDaysSince, textClearUp } from "@app/utils/utils";
import Avatar from "@app/components/pet/Avatar/Avatar";
import Icon from "@app/components/Icon/Icon";

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
  createDate: string;
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
  createDate,
}: Props) => {
  const details = [
    {
      label: "等待",
      value: calcDaysSince(createDate).toString(),
      prefix: "天",
    },
    { label: "疫苗", value: ternaryConverter(bacterin) },
    { label: "結育", value: ternaryConverter(sterilization) },
  ];
  const petBody = bodyConverter(bodyType);
  const petKind = kindConverter(kind);
  const title = `${textClearUp(color)}${petBody}${sexConverter(
    sex
  )}的${ageConverter(age)}${petKind}`;
  const genDetail = `${
    updateDate !== "" ? `${updateDate} 更新。 ` : ""
  }${remark}`;

  return (
    <Skeleton isLoaded={!isLoading} className={styles.loading}>
      <ScaleFade in={!isLoading} initialScale={0.95}>
        <Box className={styles.petCard}>
          <Avatar src={img} alt={id.toString()} />
          <Box className={styles.petCard__desc}>
            <span className={styles.petCard__title}>{title}</span>
            <Flex className={styles.petCard__placeWrap}>
              <Icon src='/icons/place.svg' size={26} />
              <span className={styles.petCard__placeText}>{place}</span>
            </Flex>

            <Flex className={styles.petCard__detailWrap}>
              {details.map(ele => (
                <LabelBox
                  key={ele.label}
                  label={ele.label}
                  value={ele.value}
                  prefix={ele.prefix}
                />
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
