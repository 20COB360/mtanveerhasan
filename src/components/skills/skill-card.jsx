import React from 'react'
import './skill-card.scss'

export default function SkillCard(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={require('../../static-images/' + props.image)} alt="" />
      </div>
      <div className="card-title">
        <p>{props.title}</p>
      </div>
    </div>
  )
}
