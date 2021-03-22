import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, display, setWidget, editing}) => {
  return (
      <div>
        {
          editing &&
          <div>
            <select onChange={(e) => setWidget(
                widget => ({...widget, type: e.target.value}))}
                    value={widget.type} className="form-control">
              <option value={"HEADING"}>Heading</option>
              <option value={"PARAGRAPH"}>Paragraph</option>
              <option value={"LIST"}>List</option>
              <option value={"IMAGE"}>Image</option>
              <option value={"HYPERLINK"}>Hyperlink</option>
              <option value={"VIDEO"}>Video</option>
            </select>
            <textarea
                onChange={(e) => setWidget({...widget, text: e.target.value})}
                value={widget.text}
                className="form-control"></textarea>
          </div>
        }
        {
          !editing &&
          <p>
            {display.text}
          </p>
        }
      </div>
  )
}

export default ParagraphWidget