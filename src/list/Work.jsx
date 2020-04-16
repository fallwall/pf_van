import React from 'react';

const Work = (props) => {
  return (
    <div className={`work work${props.num}`}>
      <div className="work-content">
        <div className="work-left">
          <h2 style={{ margin: "auto" }}>{props.data.title}</h2>
        </div>
        <div className="work-right">
          <img className="work-img" src={props.data.img} />
          <p>{props.data.des}</p>
        </div>
      </div>
    </div>
  )
}

export default Work;