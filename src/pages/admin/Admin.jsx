import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AdDash, AdSidePanel } from "../../components";
import { collection,getDoc,limit,onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const Admin = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDash, setIsDash] = useState(true);
  const [isInterns, setIsInterns] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  
  //Fetch State
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [newIntern, setNewIntern] = useState([]);

  useEffect(() => {
    const fetchNewIntern = async () => {
      const dataRef = collection(db, "users");
      const q = query(dataRef,  limit(2));
      const querySnapshot = await getDoc(q)
      const fetchNewInternData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
      setNewIntern(fetchNewInternData);
    }
    fetchNewIntern()
  }, []);
  console.log(newIntern);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "courses"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCourses(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);


  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);
  return (
    <AdminContainerWrapper>
      <AdSidePanel
        setIsDash={setIsDash}
        setIsInterns={setIsInterns}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setShowPost={setShowPost}
        setIsDrawer={setIsDrawer}
      />
      <AdDash
        isDash={isDash}
        setIsInterns={setIsInterns}
        isInterns={isInterns}
        activeIndex={activeIndex}
        showPost={showPost}
        setShowPost={setShowPost}
        isDrawer={isDrawer}
        setIsDrawer={setIsDrawer}
        courses={courses}
        users={users}
        blogs={blogs}
      />
    </AdminContainerWrapper>
  );
};

const AdminContainerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default Admin;
