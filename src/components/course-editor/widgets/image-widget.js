import React from 'react'

const ImageWidget = ({widget, display, editing, setWidget}) =>
    <div>
      {
        !editing &&
        <img width={display.width} height={display.height} src={display.src}/>
      }
      {
        editing &&
        <>
          <input onChange={(e) => setWidget(
              widget => ({...widget, src: e.target.value}))} value={widget.src} placeholder={"Image URL"} className="form-control"/>
          <input onChange={(e) => setWidget(
              widget => ({...widget, width: e.target.value}))} value={widget.width} className="form-control"/>
          <input onChange={(e) => setWidget(
              widget => ({...widget, height: e.target.value}))} value={widget.height} className="form-control"/>
        </>
      }
    </div>

export default ImageWidget