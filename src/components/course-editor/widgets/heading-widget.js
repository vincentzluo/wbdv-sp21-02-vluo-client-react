import React from 'react'

const HeadingWidget = ({widget, display, setWidget, editing}) =>
    <div>
      {display.size === 1 && <h1>{display.text}</h1>}
      {display.size === 2 && <h2>{display.text}</h2>}
      {display.size === 3 && <h3>{display.text}</h3>}
      {display.size === 4 && <h4>{display.text}</h4>}
      {display.size === 5 && <h5>{display.text}</h5>}
      {display.size === 6 && <h6>{display.text}</h6>}
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
          <input onChange={(e) => setWidget(
              widget => ({...widget, text: e.target.value}))}
                 value={widget.text} className="form-control"/>
          <select onChange={(e) => setWidget(
              widget => ({...widget, size: parseInt(e.target.value)}))}
                  value={widget.size} className="form-control">
            <option value={1}>Heading 1</option>
            <option value={2}>Heading 2</option>
            <option value={3}>Heading 3</option>
            <option value={4}>Heading 4</option>
            <option value={5}>Heading 5</option>
            <option value={6}>Heading 6</option>
          </select>
        </div>
      }
    </div>

export default HeadingWidget
