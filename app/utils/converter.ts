export const sexConverter = (sex: PetSexType) => {
  switch (sex) {
    case "F":
      return "母";
    case "M":
      return "公";
    default:
      return "未知";
  }
};

export const ageConverter = (age: PetAgeType) => {
  switch (age) {
    case "ADULT":
      return "成年";
    case "CHILD":
      return "幼年";
    default:
      return "未知";
  }
};

export const bodyConverter = (bodyType: PetBodyType) => {
  switch (bodyType) {
    case "BIG":
      return "大型";
    case "SMALL":
      return "小型";
    default:
      return "中型";
  }
};

export const ternaryConverter = (str: TernaryType) => {
  switch (str) {
    case "T":
      return "有";
    case "N":
      return "未";
    default:
      return "無法確認是否已";
  }
};

export const kindConverter = (kind: string): string => {
  switch (kind) {
    case "狗":
      return "汪";
    case "貓":
      return "喵";
    default:
      return kind;
  }
};
