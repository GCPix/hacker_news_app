import React from 'react'
import './ListItem.css'

const ListItem = (props)=>{


  function handleChange(evt){
    //I think this needs to be a class otherwise I can't pass the information back.  id is returning what I expect so I need to bind it????? change back to evt.target.getAttribute('id')
    props.onStorySelected(evt.target.getAttribute('id'))
  }

return(
      <li className = "listItem" key = {props.index} id = {props.index} onClick = {handleChange}>{props.title}</li>
)
}
export default ListItem;
