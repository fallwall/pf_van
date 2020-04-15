import React from 'react';

const Work = (props) => {
  return (
    <div className={`work work${props.num}`}>
      <h2 style={{ margin: "auto" }}>{props.num}</h2>
    </div>
  )
}

export default Work;