import React from 'react';
import {useQuery} from "react-query";
import {PATH_URLS} from "../../core/services/constants";
import {getPosts} from "../../core/services";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import GeneralCard from "../../components/Cards/GeneralCard";
import GeneralCardList from "../../components/Cards/GeneralCardList";

const Posts = () => {
  const {data, isLoading, isError} = useQuery(PATH_URLS.posts, getPosts);

  if(isLoading) return <LoadingComponent />
  if(isError) return <div>Error...</div>

  return (
    <div className="posts">
      <GeneralCardList>
        {data?.map(elem => {
          return (
            <GeneralCard
              key={elem.id}
              id={elem.id}
              title={elem.title}
              content={elem.body}
              userId={elem.userId}
            />
          )
        })}
      </GeneralCardList>

    </div>
  );
};

export default Posts;