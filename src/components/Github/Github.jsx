// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Github = () => {
  // const { username } = useParams();
  // const [userData, setUserData] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // async function fetchUserData() {
  //   try {
  //     setLoading(true);
  //     const res = await fetch(`https://api.github.com/users/${username}`);
  //     const data = await res.json();
  //     setUserData(data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     setError(error.message);
  //   }
  // }

  // console.log(userData);
  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // console.log(userData);

  // if (loading) {
  //   return <div>Loading ! Please Wait</div>;
  // }

  // if (error) {
  //   return <div>Error ! {error}</div>;
  // }

  const data = useLoaderData();

  return (
    // <div className="m-4 bg-gray-600 p-4 text-center text-3xl text-white">
    //   Github followers: {userData.followers}
    //   <img src={userData.avatar_url} alt="Git picture" width={300} />
    //   <div>Name: {userData.name}</div>
    //   <div>Login: {username}</div>
    // </div>
    <div className="m-4 bg-gray-600 p-4 text-center text-3xl text-white">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/faizanfareedkhan");
  return response.json();
};
