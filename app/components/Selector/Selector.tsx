import { Flex, Select } from "@chakra-ui/react";
import { useAppDispatch } from "@lib/hooks";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";
import styles from "./Selector.module.scss";
interface Props {
  placeholder?: string;
  label?: string;
  currVal?: string | number;
  field: keyof PetFilterType;
  options: OptionsType<string | number>[];
  reducer: ActionCreatorWithPayload<{
    field: keyof PetFilterType;
    value: string;
  }>;
}
const Selector = ({
  placeholder,
  label,
  currVal,
  field,
  options,
  reducer,
}: Props) => {
  const dispatch = useAppDispatch();
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(reducer({ field, value: e.target.value }));
  };

  return (
    <Flex className={styles.selectorWrap}>
      <label className={styles.selectorWrap__label}>{label}</label>
      <Select
        className={styles.selectorWrap__selector}
        size='md'
        onChange={handleSelectChange}
        value={currVal ?? ""}
      >
        <option label={placeholder} value='' key='' hidden />
        {options.map(ele => (
          <option key={ele.label} value={ele.value}>
            {ele.label}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default Selector;
