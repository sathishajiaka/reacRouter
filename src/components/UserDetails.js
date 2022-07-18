import React from 'react';
import { useParams } from 'react-router-dom';


export const UserDetails = () => {
    const params = useParams();
    console.log("params",params)

    const uid = params.userId;
  return <div>Details about Users {uid}</div>;
}
