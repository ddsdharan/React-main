import React from 'react';
import { useEffect } from "react";
import { useState, useNavigate } from 'react';
import Todo from './todo';



function Home() {

  const usenavigate = useNavigate();
  const [customerlist, listupdate] = useState(null);


  useEffect(() => {
    let username=sessionStorage.getItem('username');
    if(username === ' || username === null'){
      usenavigate('/login');
    }
     let jwttoken = sessionStorage.getItem('jwttoken');
        fetch("http://localhost:3500", {
            headers: {
                'Authorization': 'bearer ' + jwttoken
            }
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            listupdate(resp);
        }).catch((err) => {
            console.log(err.messsage)
        });

  },);
  return (
    <>
    <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Credit Limit</td>
                    </tr>
                </thead>
                <tbody>
                    {customerlist &&
                        customerlist.map(item => (
                            <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.creditLimit}</td>
                            </tr>

                        ))
                    }
                </tbody>

            </table>
            <div className="container"><Todo /></div>
    </>
  )
}

export default Home;