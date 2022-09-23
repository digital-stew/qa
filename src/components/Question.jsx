import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function Question({title, info}) {
  const [showMore,setShowMore] = useState(false)
  return (
    <div className="question">
      <div className="question-title">
        <h3>{title}</h3>
        <div onClick={()=> setShowMore(!showMore)}>{showMore?<AiOutlineMinus />:<AiOutlinePlus />}</div>
      </div>
      {showMore?<p>{info}</p>:null}
    </div>
  )
}

export default Question