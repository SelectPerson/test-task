import React from 'react';
import {useQuery} from "react-query";
import {PATH_URLS} from "../../core/services/constants";
import {getAlbums} from "../../core/services";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import GeneralCard from "../../components/Cards/GeneralCard";
import GeneralCardList from "../../components/Cards/GeneralCardList";

const Albums = () => {
  const {data, isLoading, isError} = useQuery(PATH_URLS.albums, getAlbums)

  if(isLoading) return <LoadingComponent />
  if(isError) return <div>Error...</div>

  return (
    <GeneralCardList>
      {data?.map(elem => {
        return (
          <GeneralCard
            key={elem.id}
            id={elem.id}
            title={elem.title}
            userId={elem.userId}
          />
        )
      })}
    </GeneralCardList>
  );
};

export default Albums;