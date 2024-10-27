import { toggleDrawer } from "@app/features/drawerSlice";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@lib/hooks";

const CompositeFilter = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(state => state.drawer);
  const onClose = () => {
    dispatch(toggleDrawer());
  };

  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <DrawerHeader>搜尋條件</DrawerHeader>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CompositeFilter;
