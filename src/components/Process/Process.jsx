/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { processData } from '../../utils/data'

import { motion } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'
const Process = () => {
  return (
    <ProcessContainerWrapper className='grid-col-4'>
      {processData.map((data, id) => (

      <motion.div className="card" key={id}  
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * id }}>
         
        <h3>{data.title} {data.icon}</h3>
        <p>{data.desc}</p>
        <span><MdArrowForward /></span>
      </motion.div>
      ))}
    </ProcessContainerWrapper>
  )
}

const ProcessContainerWrapper = styled.section`
 width: 100%;
 height: 50vh;
 padding: 20px;
 .card{
    transition: box-shadow 0.3s ease-in-out;
    height: 75%;
    p{
        font-size: 20px;
    }
    span{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-radius: 50px;
        color: rgb(7, 215, 226);
        cursor: pointer;
        float: right;
        font-weight: 600;
        padding: 0 15px;
        transition: margin-left 0.3 ease-in-out;
        &:hover{
            margin-left: 2px;
        }
    }

    &:hover{
        box-shadow: 0 20px 10px rgba(0, 0, 0, 0.027);
    }
 }
 
`

export default Process