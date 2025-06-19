import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { Over, SideBar } from "../../components";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebaseConfig";


const Overview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDash, setShowDash] = useState(true);
  const [showCourse, setShowCourse] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [courses, setCourses] = useState([]);
  const [interns, setInterns] = useState([]);
    useEffect(() => {
      const unsub = onSnapshot(
        collection(db, 'courses'),
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
        collection(db, 'users'),
        (snapshot) => {
          let list = [];
          snapshot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setInterns(list);
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
    <OverviewContainerWrapper>
      <SideBar
        setShowDash={setShowDash}
        setShowCourse={setShowCourse}
        setShowNotice={setShowNotice}
        setShowTasks={setShowTasks}
        showSettings={showSettings}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Over
        showDash={showDash}
        showCourse={showCourse}
        showNotice={showNotice}
        showTasks={showTasks}
        showSettings={setShowSettings}
        setShowSideBar={setShowSideBar}
        activeIndex={activeIndex}
        courses={courses}
        interns={interns}
      />
    </OverviewContainerWrapper>
  );
};

const OverviewContainerWrapper = styled.main`
  max-width: 100%;
  min-height: 100vh;
  position: relative;
  .active{
    left: 0;
  }
`;

export default Overview;
