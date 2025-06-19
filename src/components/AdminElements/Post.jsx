/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaCloudUploadAlt } from "react-icons/fa";
import styled from "styled-components";
import preBg from "../../assets/images/thumb/course_thumb08.jpg";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../firebaseConfig";
const initialState = {
  title: "",
  category: "",
  desc: "",
};

const categoryOption = [
  "Software Engineering",
  "Graphic Design",
  "UI / UX Design",
  "Web Development",
  "Marketing",
];

const levelOption = ["Beginner", "Intermediate", "Advance"];
const Post = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    courseName: "",
    courseCategory: "",
    description: "",
    level: "",
    credential: "",
    duration: "",
    instructor: "",
    startDate: "",
    endDate: "",
    audienceType: "",
    prerequisites: "",
    resources: [],
    lessons: [],
    tasks:[],
    rating: 0,
  });

  const [isBlog, setIsBlog] = useState(true);
  const [isCourse, setIsCourse] = useState(false);
  const [isNotice, setIsNotice] = useState(false);
  //Blog Form
  const { title, category, desc } = form;

  //Course Form 
  const {
    courseName,
    courseCategory,
    description,
    level,
    credential,
    duration,
    instructor,
    startDate,
    endDate,
    audienceType,
    prerequisites,
    resources,
    rating,
    tasks,
    lessons
  } = formData;
  const [resourceInput, setResourceInput] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [assetsCtl, setAssetCtl] = useState(false);
 
  //Course onChange handler
  const handleCourseChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Blog Form Handling
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  //Course Form Handling
  const onLevelChange = (e) => {
    setFormData({ ...formData, level: e.target.value });
  };

  const handleAddResource = () => {
    if (resourceInput) {
      setFormData((prev) => ({
        ...prev,
        resources: [...prev.resources, resourceInput],
      }));
      setResourceInput("");
    }
  };

  const handleAddTask = () => {
    if(taskInput){

      setFormData((prev) => ({
        ...prev,
        tasks: [...prev.tasks, taskInput]
      }));
      setTaskInput("");
    }
  }

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    if (
      courseName &&
      courseCategory &&
      description &&
      level &&
      credential &&
      duration &&
      instructor &&
      startDate &&
      endDate &&
      audienceType &&
      prerequisites &&
      resources &&
      rating &&
      tasks && 
      lessons
    ) {
       await addDoc(collection(db, 'courses'), {
        ...formData,
        datePublished: new Date()
       })
      setSuccessMessage(true);
    }else{
      console.log('Something went wrong, check input fields and try again!');
    }
    setFormData('')
  };


  //Blog Post Banner Upload
  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `lessonsSrc/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            console.log('banner uploaded');
            setFormData((prev) => ({ ...prev.lessons, lessonDir: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "blogs"), {
        ...form,
        datePosted: serverTimestamp(),
      });
      setSuccess(true);
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <PostContainerWrapper>
      <div className="top">
        <div
          className="add-post-for-card card"
          onClick={() => {
            setIsBlog(true);
            setIsCourse(false);
            setIsNotice(false);
          }}
        >
          <div className="ico-box">
            <FaCloudUploadAlt />
          </div>
          <h3>Make Blog Post</h3>
        </div>
        <div
          className="add-post-for-card card"
          onClick={() => {
            setIsBlog(false);
            setIsCourse(true);
            setIsNotice(false);
          }}
        >
          <div className="ico-box">
            <FaCloudUploadAlt />
          </div>
          <h3>Upload Course</h3>
        </div>
        <div
          className="add-post-for-card card"
          onClick={() => {
            setIsBlog(true);
            setIsCourse(false);
            setIsNotice(false);
          }}
        >
          <div className="ico-box">
            <FaCloudUploadAlt />
          </div>
          <h3>Post Announcement</h3>
        </div>
      </div>
      {isBlog && (
        <AddBlogContainer>
          <form onSubmit={handleBlogSubmit}>
            <div className="blog-banner-container">
              <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} />
              <label htmlFor="file">
                <FaCloudUploadAlt />
              </label>
              <div className="file-preview">
                <img src={preBg} alt="" />
              </div>
            </div>
            <div className="form-container">
              <div className="input-field">
                <input
                  type="text"
                  name="title"
                  id="blogTItle"
                  placeholder="Blog Title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <select value={category} onChange={onCategoryChange}>
                  <option>Please Select Category</option>
                  {categoryOption.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-area">
                <textarea
                  name="desc"
                  id="desc"
                  placeholder="Blog Description"
                  value={desc}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" disabled={progress !== null && progress > 100}>Submit Blog</button>
            </div>
          </form>
          {err && <div>{err}</div>}
          {success && <div>Blog data posted successfully</div>}
        </AddBlogContainer>
      )}
      {isCourse && (
        <AddCourseContainer>
          <FormWrapper onSubmit={handleCourseSubmit}>
            <Heading>Upload New Course</Heading>
            {successMessage && (
              <SuccessMessage>Course Uploaded Successfully</SuccessMessage>
            )}

            <Input
              name="courseName"
              placeholder="Course Name"
              value={formData.courseName}
              onChange={handleCourseChange}
              required
            />
             <Input
              name="courseCategory"
              placeholder="Course Category"
              value={formData.courseCategory}
              onChange={handleCourseChange}
              required
            />
            <Textarea
              name="description"
              placeholder="Description"
              rows={4}
              value={formData.description}
              onChange={handleCourseChange}
              required
            />
            <Level className="level">
              <select value={formData.level} onChange={onLevelChange}>
                <option>Please Select Level</option>
                {levelOption.map((option, index) => (
                  <option value={option || ""} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </Level>
            <Input
              name="credential"
              placeholder="Credential"
              value={formData.credential}
              onChange={handleCourseChange}
            />
            <Input
              name="duration"
              placeholder="Duration"
              value={formData.duration}
              onChange={handleCourseChange}
            />
            <Input
              name="instructor"
              placeholder="Instructor"
              value={formData.instructor}
              onChange={handleCourseChange}
            />
            <Input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleCourseChange}
            />
            <Input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleCourseChange}
            />
            <Input
              name="audienceType"
              placeholder="Audience Type"
              value={formData.audienceType}
              onChange={handleCourseChange}
            />
            <Textarea
              name="prerequisites"
              placeholder="Prerequisites"
              rows={2}
              value={formData.prerequisites}
              onChange={handleCourseChange}
            />

            <Label>Add Learning Resource:</Label>
            <div className="addRes">
              <Input
                type="text"
                value={resourceInput}
                onChange={(e) => setResourceInput(e.target.value)}
                className="res-in"
              />
              <Button
                className="res-btn"
                type="button"
                secondary
                onClick={handleAddResource}
              >
                Add
              </Button>
            </div>
            <ResourceList>
              {formData.resources.map((res, idx) => (
                <li key={idx}><FaCheckCircle className="ico"/>                                                                                                                                                          {res}</li>
              ))}
            </ResourceList>
            <Label>Add Tasks: </Label>
            <div className="addTask">
              <Input 
                type="text" 
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="res-in"
              />
              <Button
                className="res-btn"
                type="button"
                secondary
                onClick={handleAddTask}
              >
                Add
              </Button>
            </div>
            <TaskList>
              {formData.tasks.map((tsk, idt) => (
                <li key={idt}><FaCheckCircle className="ico"/>{tsk}</li>
              ))}
            </TaskList>
            <Input
              name="rating"
              type="number"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
              value={formData.rating}
              onChange={handleCourseChange}
            />
            <Button type="submit" disabled={progress !== null && progress > 100} >
              Submit Course
            </Button>
          </FormWrapper>
          {assetsCtl && <AssetCtlContainer>
            <h1>Hello, World</h1>
          </AssetCtlContainer>}
        </AddCourseContainer>
      )}
      {isNotice && <AddNoticeContainer></AddNoticeContainer>}
    </PostContainerWrapper>
  );
};

const PostContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, rgb(213, 219, 215), rgb(226, 232, 247));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  .top {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 10px;

    .add-post-for-card {
      width: 35%;
      height: 90px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
      border-radius: 1rem;
      .ico-box {
        background: rgb(4, 27, 27);
        width: 50px;
        aspect-ratio: 1/1;
        color: cyan;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        font-size: 1.3rem;
      }
    }
  }
`;
const AddBlogContainer = styled.article`
  width: 99%;
  height: 80%;
  background: rgba(255, 255, 255, 0.979);
  border-radius: 10px;
  margin: 5px auto;
  form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .blog-banner-container {
      width: 30%;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      font-size: 5rem;
      overflow: hidden;
      label {
        width: 95%;
        height: 35%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(30, 30, 31);
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(20, 20, 20, 0.527);
        color: cyan;
        cursor: pointer;
      }
      input {
        display: none;
      }
      .file-preview {
        width: 95%;
        height: 50%;
        background: rgb(241, 241, 243);
        border-radius: 1rem;
        transform: translateY(2rem);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 95%;
          height: 90%;
          object-fit: cover;
          border-radius: inherit;
        }
      }
    }
    .form-container {
      width: calc(100% - 30%);
      height: 100%;
      padding: 10px;
      .input-field {
        width: 98%;
        height: 70px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 10px 0;
        input,
        select {
          width: 100%;
          height: 100%;
          background: transparent;
          border-radius: inherit;
          padding: 0 20px;
          font-size: 20px;
          appearance: none;
        }
      }
      .input-area {
        width: 98%;
        height: 260px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 10px;
        textarea {
          width: 100%;
          height: 100%;
          background: transparent;
          border-radius: inherit;
          font-size: 20px;
          padding: 20px;
          resize: none;
        }
      }
      button {
        margin-top: 8px;
        width: 25%;
        height: 55px;
        &:hover {
          background: teal;
          filter: contrast(0.8);
        }
      }
    }
  }
`;
const AddCourseContainer = styled(AddBlogContainer)`
  background: transparent;
  height: 80%;
`;

const FormWrapper = styled.form`
  max-width: 1000px;
  min-height: max-content;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  .addRes, .addTask, .addLes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    .res-in {
      flex: 1;
      width: 80%;
    }
    .res-btn {
      width: 20%;
      transform: translateY(-1rem);
    }
  }
`;
const AssetCtlContainer = styled.form`
  width: 80%;
  height: 98%;
  background: black;
  color: #fff;
`

const Heading = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #222;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
`;

const Level = styled.div`
  width: 100%;
  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fff;
    margin-bottom: 1rem;
    appearance: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.secondary ? "rgb(52, 152, 219)" : "#27ae60")};
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`;

const ResourceList = styled.ul`
  margin: 0.5rem 0;
  padding: 1.25rem 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 90%;
  li {
    font-size: 16px;
    font-weight: 500;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    .ico{
      color: rgb(7, 238, 238);
    }
  }
`;

const TaskList = styled(ResourceList)``

const SuccessMessage = styled.p`
  color: #27ae60;
  font-weight: 600;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
`;

const AddNoticeContainer = styled(AddBlogContainer)`
  background: rgb(0, 255, 21);
`;

export default Post;
