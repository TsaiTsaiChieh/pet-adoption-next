"use client";
import styles from "./page.module.scss";
import PetCard from "@app/components/pet/PetCard/PetCard";
import { Grid } from "@chakra-ui/react";
import { useGetPetByFilterQuery } from "@app/services/pet";
import { useAppSelector } from "@lib/hooks";
import TopFilter from "@app/components/pet/TopFilter/TopFilter";
import NotFound from "@app/components/pet/NotFound/NotFound";
import Pagination from "@app/components/pet/Pagination/Pagination";

const Pet = () => {
  const { filter } = useAppSelector(state => state.pet);
  const { data, isLoading, isFetching } = useGetPetByFilterQuery({ ...filter });

  return (
    <>
      <TopFilter />
      {data?.length === 0 && <NotFound />}
      <Grid className={styles.petSection}>
        {data &&
          data.map(pet => (
            <PetCard
              isLoading={isLoading || isFetching}
              key={pet.animal_id}
              img={pet.album_file}
              id={pet.animal_id}
              subId={pet.animal_subid}
              kind={pet.animal_kind}
              color={pet.animal_colour}
              place={pet.shelter_name}
              sex={pet.animal_sex}
              age={pet.animal_age}
              phone={pet.shelter_tel}
              address={pet.shelter_address}
              remark={pet.animal_remark}
              bodyType={pet.animal_bodytype}
              bacterin={pet.animal_bacterin}
              sterilization={pet.animal_sterilization}
              updateDate={pet.animal_update}
            />
          ))}
      </Grid>
      <Pagination />
    </>
  );
};

export default Pet;
