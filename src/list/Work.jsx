import React from 'react';

const Work = (props) => {
  return (
    <div className={`work work${props.num}`}>
      <h2 style={{ margin: "auto" }}>{props.num}</h2>
      {/* <img src={props.data.img} />
      <p>{props.data.des}</p> */}
    </div>
  )
}

export default Work;