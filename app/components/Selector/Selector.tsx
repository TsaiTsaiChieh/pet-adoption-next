import { Select } from "@chakra-ui/react";
import { useAppDispatch } from "@lib/hooks";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";

interface Props {
  currVal?: string | number;
  field: keyof PetFilterType;
  options: OptionsType<string | number>[];
  reducer: ActionCreatorWithPayload<{
    field: keyof PetFilterType;
    value: string;
  }>;
}
const Selector = ({ currVal, field, options, reducer }: Props) => {
  const dispatch = useAppDispatch();
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(reducer({ field, value: e.target.value }));
  };

  return (
    <Select size='md' onChange={handleSelectChange} value={currVal}>
      {options.map(ele => (
        <option key={ele.label} value={ele.value}>
          {ele.label}
        </option>
      ))}
    </Select>
  );
};

export default Selector;
