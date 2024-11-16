"use client";
import styles from "./CompositeFilter.module.scss";
import { toggleDrawer } from "@app/features/drawerSlice";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@lib/hooks";
import Selector from "@app/components/Selector/Selector";
import {
  queryPet,
  resetTmpFilter,
  updateTmpFilterByField,
} from "@app/features/petSlice";
import {
  ageOptions,
  areaOptions,
  bodyTypeOptions,
  sexOptions,
  shelterOptions,
} from "@app/utils/options";
import ButtonFilter from "@app/components/pet/ButtonFilter/ButtonFilter";

const CompositeFilter = () => {
  const dispatch = useAppDispatch();
  const { tmpFilter } = useAppSelector(state => state.pet);
  const { isOpen } = useAppSelector(state => state.drawer);
  const onClose = () => {
    dispatch(toggleDrawer());
  };

  const handleSearch = () => {
    dispatch(queryPet(tmpFilter));
    dispatch(toggleDrawer());
  };
  const handleClear = () => {
    dispatch(resetTmpFilter());
  };
  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <DrawerHeader>搜尋條件</DrawerHeader>
          <Selector
            placeholder='請選擇縣市'
            label='縣市'
            currVal={tmpFilter.area}
            field='area'
            options={areaOptions}
            reducer={updateTmpFilterByField}
          />
          <Selector
            placeholder='請選擇收容所'
            label='收容所'
            currVal={tmpFilter.shelter}
            field='shelter'
            options={shelterOptions}
            reducer={updateTmpFilterByField}
          />
          <ButtonFilter
            label='年齡'
            currVal={tmpFilter.age}
            field='age'
            options={ageOptions}
            reducer={updateTmpFilterByField}
          />
          <ButtonFilter
            label='性別'
            currVal={tmpFilter.sex}
            field='sex'
            options={sexOptions}
            reducer={updateTmpFilterByField}
          />
          <ButtonFilter
            label='體型'
            currVal={tmpFilter.bodyType}
            field='bodyType'
            options={bodyTypeOptions}
            reducer={updateTmpFilterByField}
          />
        </DrawerBody>
        <DrawerFooter className={styles.drawer__footer}>
          <Button className={styles.drawer__clearBtn} onClick={handleClear}>
            清除條件
          </Button>
          <Button className='primary-btn' onClick={handleSearch}>
            搜尋
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CompositeFilter;
