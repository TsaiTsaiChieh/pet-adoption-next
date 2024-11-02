import { queryPet } from "@app/features/petSlice";
import styles from "./Pagination.module.scss";
import { Flex, Input } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@lib/hooks";
import {
  FaAngleLeft,
  FaAnglesLeft,
  FaAngleRight,
  FaAnglesRight,
} from "react-icons/fa6";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const Pagination = () => {
  const size = 20;
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(state => state.pet);
  const [pageInput, setPageInput] = useState<number | string>(filter.page);
  useEffect(() => {
    if (filter.page >= 1) setPageInput(filter.page);
  }, [filter.page]);
  // for input
  const handlePageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && !isNaN(value)) {
      setPageInput(value);
      debouncedPage(value);
    } else {
      setPageInput("");
    }
  };

  // Debounce callback
  const debouncedPage = useDebouncedCallback((value: number) => {
    dispatch(queryPet({ ...filter, page: value }));
  }, 200);

  return (
    <Flex className={styles.paginator}>
      <IconButton
        className={styles.paginator__button}
        disabled={filter.page < 11}
        aria-label='double-left'
        onClick={() => debouncedPage(filter.page - 10)}
      >
        <FaAnglesLeft size={size} />
      </IconButton>
      <IconButton
        className={styles.paginator__button}
        disabled={filter.page <= 1}
        aria-label='left'
        onClick={() => debouncedPage(filter.page - 1)}
      >
        <FaAngleLeft size={size} />
      </IconButton>
      <Input
        min='1'
        onChange={handlePageChange}
        value={pageInput}
        className={styles.paginator__input}
        type='number'
        placeholder='頁數'
      />
      <IconButton
        className={styles.paginator__button}
        aria-label='double-right'
        onClick={() => debouncedPage(filter.page + 1)}
      >
        <FaAngleRight size={size} />
      </IconButton>
      <IconButton
        className={styles.paginator__button}
        aria-label='right'
        onClick={() => debouncedPage(filter.page + 10)}
      >
        <FaAnglesRight size={size} />
      </IconButton>
    </Flex>
  );
};

export default Pagination;
