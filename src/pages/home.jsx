import React, {useEffect, useMemo, useState} from 'react';
import {useQuery} from "react-query";
import {getUsers} from "../core/services";
import {PATH_URLS} from "../core/services/constants";
import LoadingComponent from "../components/Loading/LoadingComponent";
import {Link} from "react-router-dom";

const Home = () => {
  const {data, isLoading, isError} = useQuery(PATH_URLS.users, getUsers);
  const [dataUsers, setDataUsers] = useState([]);
  const [filterInputUsers, setFilterInputUsers] = useState('');
  const [sorting, setSorting] = useState(null)

  useEffect(() => {
    setDataUsers(data);
  }, [data]);


  const filterUsers = useMemo(() => {
    const length = filterInputUsers.length;
    if(!length) return dataUsers;

    return dataUsers?.filter(elem => {
      const userFiltered = elem.username.substring(0, length).toUpperCase();
      const filterInputUsersUpper = filterInputUsers.toUpperCase();
      if(userFiltered === filterInputUsersUpper) return true;
    })
  }, [dataUsers, filterInputUsers]);


  const setSortUsers = () => {
    if(sorting === null) {
      const result = [...dataUsers].sort((a, b) => {
        if (a.username < b.username) {
          return -1;
        } else if (a.username > b.username) {
          return 1;
        } else {
          return 0;
        }
      });
      setDataUsers(result);
      setSorting('ASC')
    } else if(sorting === 'ASC') {
      const result = [...dataUsers].sort((a, b) => {
        if (a.username > b.username) {
          return -1;
        } else if (a.username < b.username) {
          return 1;
        } else {
          return 0;
        }
      });
      setDataUsers(result);
      setSorting('DESC')
    } else if(sorting === 'DESC') {
      setDataUsers([...data])
      setSorting(null);
    }
  }

  if(isLoading) return <LoadingComponent />;
  if(isError) return <div>Error...</div>;


  return (
    <div className="container">
      <div className="mt-5 form-group d-flex align-items-center column-gap-3">
        <div className="form-group">
          <input
            className="form-control"
            placeholder={'Filter of Users'}
            value={filterInputUsers}
            onChange={(e) => setFilterInputUsers(e.target.value)}
          />
        </div>

        <span>Sorting by Name:</span>
        <button type="button" className="btn btn-primary mr-2" onClick={()=> {
          setSortUsers()

        }}>{sorting || 'Excluded'}</button>

      </div>


      <table className='table'>
        <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Posts of User</th>
          <th scope="col">Albums of User</th>
        </tr>
        </thead>
        <tbody>
        {filterUsers?.map(elem => {
          return (
            <tr key={elem.id}>
              <td>{elem.id}</td>
              <td>{elem.username}</td>
              <td><Link to={`${PATH_URLS.posts}/${PATH_URLS.user}/${elem.id}`}>Link</Link></td>
              <td><Link to={`${PATH_URLS.albums}/${PATH_URLS.user}/${elem.id}`}>Link</Link></td>
            </tr>
          )
        })}

        </tbody>
      </table>
    </div>
  );
};

export default Home;