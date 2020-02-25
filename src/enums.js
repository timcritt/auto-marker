import { Html5Entities } from 'html-entities'
import React from 'react'
import { TiTick, TiTimes, TiEdit } from 'react-icons/ti'

//this is needed to get around "dangerous code injection" protection in React. This method is safe. 
const htmlEntities = new Html5Entities();



const tick = <TiTick/>
const cross = <TiTimes/>
const unanswered = <TiEdit/>


const questionStatus = {

  CORRECT: tick,
  INCORRECT: cross,
  UNANSWERED: unanswered
}

export default questionStatus;