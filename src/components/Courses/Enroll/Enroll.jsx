import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const domainOption = [
  "Web Development",
  "App Development",
  "UI / UX Design",
  "Graphic Design",
  "Cyber Security",
  "Data Science",
  "Machine Learning",
  "Python Programming",
  "Java Programming",
  "C++ Programming",
];

const Enroll = () => {
  const navigate = useNavigate()
   const onDomainChange = (e) => {
    e.target.value;
  };
  return (
    <EnrollContainerWrapper>
      <div className="enroll-form-container">
        <div className="enroll-info">
          <div className="layer-a">
            <h3>INTERNSHIP REGISTRATION FORM - 3 MONTH</h3>
            <h4>Hello, Student</h4>

            <p>
              <strong>Greeting from CodeAlpha!!</strong>
            </p>

            <span>
              Sikacoder, in collaboration with IIT, is organizing a Training +
              Internship program.
            </span>
          </div>
          <div className="layer-b">
            <h3> ⚙️ Industrial Internship</h3>
            <p>
              This program provides practical experience with 3+ projects
              alongside the training program. Projects challenge students to
              apply learned skills in real-world situations. The capstone
              project, integrated into the final week of the internship,
              requires students to apply all learned skills and knowledge.
            </p>
          </div>

          <div className="layer-c">
          <h4>📜 After Completion of the Program, You Will Receive:</h4>
          <ul>
            <li>✅ Program Completion Certificate issued by IIT + MICROSOFT</li>
          <li>✅ 3-month Co-Branded Internship Certificate</li>
          <li>✅ Letter of Recommendation (based on performance)</li>
          </ul>
            <h4>🎯 Perks & Benefits:</h4>
            <ul>
              <li>✅ Mock Interview Preparation Tips</li>
              <li>✅ Resume Building Sessions</li>
              <li>✅ Access to Growth Community</li>
              <li>
                ✅ Participate in Our Hackathons and Unlock Your Achievement
              </li>
            </ul>
            <h3>📝 How to Register?</h3>
            <h4>
              Simply fill up the form, and your Internship Offer Letter will be
              released within 24-48 hours.
            </h4>
          </div>
          <div className="note">
            <h4>
              🚫 Please do not spam (apply multiple times for the same domain).
              If you do, your application will be considered invalid.
            </h4>
          </div>
        </div>
        <div className="enroll-form">
          <form>
            <div className="input-field">
              <label htmlFor="emailId">Email Id</label>
              <span>➝ Make sure this is correct, as your offer letter will be sent to this email.</span>
              <input type="email" name="email" id="emailId" placeholder="Email Id goes here.." />
            </div>
             <div className="input-field">
              <label htmlFor="fullName">Your Full Name</label>
              <span>➝ Enter your full name as you want it on the offer letter.</span>
              <input type="text" name="fullName" id="fullName" placeholder="Enter Your Full Name" />
            </div>
             <div className="input-field">
              <label htmlFor="contact">Contact NUmber</label>
              <span>➝ Enter your contact number as backup address</span>
              <input type="tel" name="contactNumber" id="contact" placeholder="Number" />
            </div>
             <div className="input-field">
              <label htmlFor="country">Your Country</label>
              <span>➝ Enter the Country your are applying from</span>
              <input type="text" name="country" id="country" placeholder="Country" />
            </div>
             <div className="input-field">
              <label htmlFor="college">College Name</label>
              <span>➝ Enter the full name of your college/university.</span>
              <input type="text" name="college" id="college" placeholder="Confirm College" />
            </div>
             <div className="input-field">
              <label>Internship Domain</label>
                <select  onChange={onDomainChange}>
                  <option>Please Select Domain</option>
                  {domainOption.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
             
            <button className="btn" onClick={() => {navigate('/overview')}}>
                <span>Submit Form</span>
            </button>
          </form>
        </div>
      </div>
    </EnrollContainerWrapper>
  );
};

const EnrollContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .enroll-form-container {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.151);
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 70% 30%;
    place-items: center;
    gap: 1rem;
    overflow-y: scroll;
    .enroll-info {
        padding: 12px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .layer-a, .layer-b, .layer-c,.note{
        p{
            max-width: 700px;
        }
        span{
            font-weight: 600;
        }
        h4{
            color: teal;
        }
        ul{
            padding: 3px 0;
            li{
                font-weight: 500;
                color: #111;
            }
        }
      }
      .note{
        h4{
            max-width: 600px;
            font-size: 16px;
            font-weight: 500;
            color: red;
            padding: 5px 0;
        }
      }
    }
    .enroll-form{
      width: 100%;
      height: 100%;
      background: rgb(255, 254, 254);
      overflow-y: scroll;
      form{
        width: 100%;
        height: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: .6rem;
        overflow-y: scroll;
        .input-field{
          width: 98%;
          height: max-content;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          overflow-y: hidden;
          label{
            font-size: 18px;
            color: teal;
          }
          span{
            padding: 6px 0;
            color: #111;
          }
          input,select{
            width: 95%;
            height: 45px;
            border: 1px solid #ccc;
            border-radius: .5rem;
            background: #fff;
            padding: 0 12px;
            font-size: 17px;
            appearance: none;
          }
        }
      }
      .btn{
        align-self: flex-start;
      }
    }
  }
`;

export default Enroll;
