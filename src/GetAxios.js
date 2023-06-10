import Axios from "axios";
import React, { useState, useEffect } from "react";

const GetAxios = () => {
  const [mydata, setMydata] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    Axios.get(baseURL)
    .then((response) => {
      setMydata(response.data);
    }).catch((error) => console.log(error))
  }, []);

  return (
    <>
          <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
            {mydata.map((data,index) => {
                return (
                    <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                    </tr>
                )
            })}
            </tbody>
          </table>
    </>
  );
};

export default GetAxios;
