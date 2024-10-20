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
