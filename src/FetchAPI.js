import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [posts, setPosts] = useState([]);

useEffect( () => {

   const fetchData = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users?page');
        const data = await response.json();
        setPosts(data.data)
    } catch (error) {
        console.log(error);
    }
   }
   fetchData();
},[] )


//   useEffect(() => {
//     fetch("https://reqres.in/api/users?page")
//       .then((response) => response.json())
//       .then((data) => { setPosts(data.data)})
//       .catch((err) => console.log(err))
//       },[])
      
  return (
    <div>
      <ul>
        {posts.map((pick) => {
          return (
            <div key={pick.id}>
              <li>{pick.id}</li>
              <li>{pick.first_name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchAPI;
