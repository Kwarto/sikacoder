import React from 'react'
import styled from 'styled-components'

const Auth = () => {
  return (
    <AdminAuthContainerWrapper>
       <form>
         <div className="top">
            <h3>Sign In.</h3>
         </div>
         <div className="input-container">
            <div className="input-field">
                <input type="email" name="email" placeholder='Please Enter Email Id' />
            </div>
            <div className="input-field">
                <input type="password" name="password" placeholder='Password' />
            </div>
            <div className="forget">
                <span>Forget Password?</span>
            </div>
            <div className="eula">
            <p><input type="checkbox" name="check" />By sign in you agree to sikacoder admin data privacy policy</p>
            </div>
            <button className='btn'>Login</button>
         </div>
       </form>
    </AdminAuthContainerWrapper>
  )
}

const AdminAuthContainerWrapper = styled.section`
 width: 100%;
 height: 100vh;
 background: linear-gradient(135deg, rgb(213, 219, 215), rgb(226, 232, 247));
 display: flex;
 align-items: center;
 justify-content: center;
 form{
    width: 30%;
    height: max-content;
    background: rgba(255, 255, 255, 0.747);
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.158);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 10px;
    .top{
        padding: 10px;
    }
    
    .input-container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .input-field{
            width: 100%;
            height: 70px;
            border: 1px solid #ccc;
            margin: 10px 0;
            background: transparent;
            border-radius: 1rem;
            input{
                width: 100%;
                height: 100%;
                padding: 0 15px;
                border-radius: inherit;
                font-size: 16px;
                font-weight: 500;
                background: transparent;
            }
        }

        .eula{
            width: 100%;
            padding: 10px 6px;
            p{
                display: flex;
                align-items: center;
                max-width: 300px;
                font-size: 16px;
                gap: 1rem;
                input{
                    color: teal;
                    background: red;
                    width: 30px;
                    display: none;
                }
            }
        }

        .forget{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 10px;
            transition: hover 0.3s ease-in-out;
            span{
                cursor: pointer;
                color: teal;
                font-weight: 500;
                &:hover{
                    text-decoration: underline;
                }
            }

        }

        .btn{
            display: flex;
            align-self: flex-start;
            background: teal;

            &:hover{
                background: rgb(8, 196, 196);
            }
        }
    }
 }
`

export default Auth