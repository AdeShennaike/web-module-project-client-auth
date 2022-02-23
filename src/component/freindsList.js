import React, {useState, useEffect} from "react";
import axiosWithAuth from "../axiosAuth";
import axios from 'axios';

const initialValue = {
    id: 1,
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com'
  }

function Friendlist() {
    const [friends, setFriends] = useState(initialValue)

    // useEffect(() => {
    //     axiosWithAuth().get('/api/friends')
    //         .then(res =>{
    //             debugger
    //         })
    // },[])

    return(
        <div>
            <h2> FRIENDSLIST </h2>

        </div>
    )
}

export default Friendlist;