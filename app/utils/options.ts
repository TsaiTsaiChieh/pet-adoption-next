import {
  AgeEnum,
  BodyTypeEnum,
  CityEnum,
  SexEnum,
  ShelterEnum,
} from "@app/typings/enum";

export const areaOptions: OptionsType<number>[] = [
  {
    value: CityEnum.TPE,
    label: "臺北市",
  },
  {
    value: CityEnum.TPH,
    label: "新北市",
  },
  {
    value: CityEnum.KLU,
    label: "基隆市",
  },
  {
    value: CityEnum.ILN,
    label: "宜蘭縣",
  },
  {
    value: CityEnum.TYC,
    label: "桃園市",
  },
  {
    value: CityEnum.HSH,
    label: "新竹縣",
  },
  {
    value: CityEnum.HSC,
    label: "新竹市",
  },
  {
    value: CityEnum.MAL,
    label: "苗栗縣",
  },
  {
    value: CityEnum.TXG,
    label: "臺中市",
  },
  {
    value: CityEnum.CWH,
    label: "彰化縣",
  },
  {
    value: CityEnum.NTO,
    label: "南投縣",
  },
  {
    value: CityEnum.YLH,
    label: "雲林縣",
  },
  {
    value: CityEnum.CHY,
    label: "嘉義縣",
  },
  {
    value: CityEnum.CYI,
    label: "嘉義市",
  },
  {
    value: CityEnum.TNN,
    label: "臺南市",
  },
  {
    value: CityEnum.KHH,
    label: "高雄市",
  },
  {
    value: CityEnum.IUH,
    label: "屏東縣",
  },
  {
    value: CityEnum.HWA,
    label: "花蓮縣",
  },
  {
    value: CityEnum.TTT,
    label: "臺東縣",
  },
  {
    value: CityEnum.PEH,
    label: "澎湖縣",
  },
  {
    value: CityEnum.KMN,
    label: "金門縣",
  },
  {
    value: CityEnum.LNN,
    label: "連江縣",
  },
];

export const shelterOptions: OptionsType<number>[] = [
  {
    value: ShelterEnum.TPE,
    label: "臺北市動物之家",
  },
  {
    value: ShelterEnum.TPH01,
    label: "新北市板橋區公立動物之家",
  },
  {
    value: ShelterEnum.TPH02,
    label: "新北市新店區公立動物之家",
  },
  {
    value: ShelterEnum.TPH03,
    label: "新北市中和區公立動物之家",
  },
  {
    value: ShelterEnum.TPH04,
    label: "新北市淡水區公立動物之家",
  },
  {
    value: ShelterEnum.TPH05,
    label: "新北市瑞芳區公立動物之家",
  },
  {
    value: ShelterEnum.TPH06,
    label: "新北市五股區公立動物之家",
  },
  {
    value: ShelterEnum.TPH07,
    label: "新北市八里區公立動物之家",
  },
  {
    value: ShelterEnum.TPH08,
    label: "新北市三芝區公立動物之家",
  },
  {
    value: ShelterEnum.TPH09,
    label: "新北市政府動物保護防疫處",
  },
  {
    value: ShelterEnum.KLU,
    label: "基隆市寵物銀行",
  },
  {
    value: ShelterEnum.ILN,
    label: "宜蘭縣流浪動物中途之家",
  },
  {
    value: ShelterEnum.TYC,
    label: "桃園市動物保護教育園區",
  },
  {
    value: ShelterEnum.HSH,
    label: "新竹縣動物收容所",
  },
  {
    value: ShelterEnum.HSC,
    label: "新竹市動物收容所",
  },
  {
    value: ShelterEnum.MAL,
    label: "苗栗縣生態保育教育中心",
  },
  {
    value: ShelterEnum.TXG01,
    label: "臺中市動物之家南屯園區",
  },
  {
    value: ShelterEnum.TXG02,
    label: "臺中市動物之家后里園區",
  },
  {
    value: ShelterEnum.CWH,
    label: "彰化縣流浪狗中途之家",
  },
  {
    value: ShelterEnum.NTO,
    label: "南投縣公立動物收容所",
  },
  {
    value: ShelterEnum.YLH,
    label: "雲林縣流浪動物收容所",
  },
  {
    value: ShelterEnum.CHY,
    label: "嘉義縣流浪犬中途之家",
  },
  {
    value: ShelterEnum.CYI,
    label: "嘉義市流浪犬收容中心",
  },
  {
    value: ShelterEnum.TNN01,
    label: "臺南市動物之家灣裡站",
  },
  {
    value: ShelterEnum.TNN02,
    label: "臺南市動物之家善化站",
  },
  {
    value: ShelterEnum.KHH01,
    label: "高雄市壽山動物保護教育園區",
  },
  {
    value: ShelterEnum.KHH02,
    label: "高雄市燕巢動物保護關愛園區",
  },
  {
    value: ShelterEnum.IUH,
    label: "屏東縣流浪動物收容所",
  },
  {
    value: ShelterEnum.HWA,
    label: "花蓮縣流浪犬中途之家",
  },
  {
    value: ShelterEnum.TTT,
    label: "臺東縣動物收容中心",
  },
  {
    value: ShelterEnum.PEH,
    label: "澎湖縣流浪動物收容中心",
  },
  {
    value: ShelterEnum.KMN,
    label: "金門縣動物收容中心",
  },
  {
    value: ShelterEnum.LNN,
    label: "連江縣流浪犬收容中心",
  },
];

export const ageOptions: OptionsType<AgeEnum>[] = [
  {
    value: AgeEnum.ADULT,
    label: "成年",
  },
  {
    value: AgeEnum.CHILD,
    label: "幼年",
  },
];

export const sexOptions: OptionsType<SexEnum>[] = [
  {
    value: SexEnum.MALE,
    label: "弟弟",
  },
  {
    value: SexEnum.FEMALE,
    label: "妹妹",
  },
];

export const bodyTypeOptions: OptionsType<BodyTypeEnum>[] = [
  {
    value: BodyTypeEnum.BIG,
    label: "大型",
  },
  {
    value: BodyTypeEnum.MEDIUM,
    label: "中型",
  },
  {
    value: BodyTypeEnum.SMALL,
    label: "小型",
  },
];
