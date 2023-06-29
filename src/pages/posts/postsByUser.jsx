import React from 'react';
import {useQuery} from "react-query";
import {PATH_URLS} from "../../core/services/constants";
import {getPostsByUser} from "../../core/services";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import {useParams} from "react-router-dom";
import GeneralCard from "../../components/Cards/GeneralCard";
import GeneralCardList from "../../components/Cards/GeneralCardList";

const PostsByUser = () => {
  let { userId } = useParams();
  const {data, isLoading, isError} = useQuery([PATH_URLS.postsUser, userId], () =>  getPostsByUser(userId));

  if(isLoading) return <LoadingComponent />
  if(isError) return <div>Error...</div>

  console.log("data", data)

  return (
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
  );
};

export default PostsByUser;