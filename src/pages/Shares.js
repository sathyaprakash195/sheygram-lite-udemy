import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { fireDb } from "../firebaseConfig";
import { useDispatch } from "react-redux";
import Post from "../components/Post";


function Shares() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("sheygram-lite-user"))
  const dispatch = useDispatch();
  const getData = async () => {
    dispatch({ type: "showLoading" });
    const result = await getDoc(doc(fireDb , 'users' , user.id));
    
    setData(result.data().shares);
    dispatch({ type: "hideLoading" });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-4 md:grid-cols-1 gap-10">
        {data.map((post) => {
          return <div className='card-sm'>
              <Post post={post} />
              <h1 className='mt-2 text-gray-500'>Shared By : {post.sharedBy.email}</h1>
          </div>;
        })}
      </div>
    </DefaultLayout>
  );
}

export default Shares;
