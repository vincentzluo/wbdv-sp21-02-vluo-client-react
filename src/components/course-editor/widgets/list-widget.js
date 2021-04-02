import React from 'react'

const ListWidget = ({widget, display, setWidget, editing}) => {
  return(
      <div>
        {
          editing &&
          <>
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
            <input checked={widget.ordered} onChange={(e) => setWidget(
                widget => ({...widget, ordered: e.target.checked}))} type="checkbox"/> Ordered
            <br/>
            Item list
            <textarea onChange={(e) => setWidget(
                widget => ({...widget, text: e.target.value}))}
                      value={widget.text} rows={10} placeholder={"Enter one list item per line"} className="form-control"></textarea>
          </>
        }
        {
          !editing &&
          <>
            {
              display.ordered &&
              <ol>
                {
                  display.text.split("\n").map((item) => {
                    return(
                        <li>
                          {item}
                        </li>
                    )
                  })
                }
              </ol>
            }
            {
              !display.ordered &&
              <ul>
                {
                  display.text.split("\n").map((item) => {
                    return(
                        <li>
                          {item}
                        </li>
                    )
                  })
                }
              </ul>
            }
          </>
        }
      </div>
  )
}

export default ListWidget