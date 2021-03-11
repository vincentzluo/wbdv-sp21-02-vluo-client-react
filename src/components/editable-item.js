import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
      to="/somewhere/to/go",
      deleteItem,
      updateItem,
      item,
      active,
      moduleId,
      lessonId,
      topicId,
      type
    }) => {
  const [editing, setEditing] = useState(false)
  const [cachedItem, setCahedItem] = useState(item)

  return (
      <li className={`${type === 'module'? 'list-group-item' : 'list-group-item'} 
        ${(item._id === moduleId) ? 'active' : ''}
        ${(item._id === lessonId) ? 'active' : ''}
        ${(item._id === topicId) ? 'active' : ''}
        ${editing ? 'active' : ''}`}>
        {
          !editing &&
          <>
            <Link className={`nav-link d-inline`} to={to} style={{color:'black'}}>
              {item.title}
            </Link>
            <i onClick={() => setEditing(true)} className="float-right fas fa-edit"></i>
          </>
        }
        {
          editing &&
          <>
            <input
                onChange={(e) =>
                    setCahedItem({
                      ...item,
                      title: e.target.value
                    })}
                value={cachedItem.title}/>
            <i onClick={() => {
              setEditing(false)
              updateItem(cachedItem)
            }} className="fas fa-check"></i>
            <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
          </>
        }
      </li>
  )
}

export default EditableItem