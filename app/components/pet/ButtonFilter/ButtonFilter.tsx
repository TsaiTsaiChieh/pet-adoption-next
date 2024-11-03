import styles from "./ButtonFilter.module.scss";
import { useAppDispatch } from "@lib/hooks";
import { Button, Flex } from "@chakra-ui/react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface Props {
  label: string;
  options: OptionsType<string>[];
  currVal?: string;
  field: keyof PetFilterType;
  reducer: ActionCreatorWithPayload<{
    field: keyof PetFilterType;
    value: string;
  }>;
}
const ButtonFilter = ({ label, options, currVal, field, reducer }: Props) => {
  const dispatch = useAppDispatch();
  const updateFilter = (value: string) => {
    dispatch(reducer({ field, value }));
  };
  console.log(currVal);

  return (
    <Flex className={styles.buttonContent}>
      <label className={styles.buttonContent__label}>{label}</label>
      <Flex className={styles.buttonContent__wrap}>
        {options.map(ele => (
          <Button
            key={ele.label}
            className={`secondary-btn ${
              ele.value === currVal ? "--is-activated" : ""
            }`}
            onClick={() => updateFilter(ele.value as string)}
          >
            {ele.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default ButtonFilter;
