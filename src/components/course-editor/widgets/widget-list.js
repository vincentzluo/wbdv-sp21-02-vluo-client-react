import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import {useParams} from "react-router-dom"
import widgetService, {findWidgetsForTopic} from "../../../services/widget-service";
import {connect} from "react-redux";

const WidgetList = (
    {
        widgets,
        findWidgetsForTopic,
        createWidget,
        updateWidget,
        deleteWidget
    }
) => {
  const {topicId} = useParams()

  useEffect(() => {
    findWidgetsForTopic(topicId)
  }, [topicId])
  const [widget, setWidget] = useState({})

  return (
      <div>
        <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
        <h1>Widget List</h1>
        <ul className="list-group">
          {
            widgets.map(_widget =>
                <li key={_widget.id} className="list-group-item">
                  {
                    _widget.id === widget.id &&
                    <>
                      <i onClick={() => deleteWidget(widget)}
                         className="fas fa-trash float-right"></i>
                      <i onClick={() => {
                        updateWidget(widget); setWidget({})
                      }} className="fas fa-check float-right"></i>
                    </>
                  }
                  {
                    _widget.id !== widget.id &&
                    <i onClick={() => setWidget(_widget)}
                       className="fas fa-cog float-right"></i>
                  }
                  {
                    _widget.type === "HEADING" &&
                    <HeadingWidget
                        setWidget={setWidget}
                        editing={_widget.id === widget.id}
                        widget={widget}
                        display={_widget}/>
                  }
                  {
                    _widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        setWidget={setWidget}
                        editing={_widget.id === widget.id}
                        widget={widget}
                        display={_widget}/>
                  }
                  {
                    _widget.type === "LIST" &&
                    <ListWidget
                        setWidget={setWidget}
                        editing={_widget.id === widget.id}
                        widget={widget}
                        display={_widget}/>
                  }
                  {
                    _widget.type === "IMAGE" &&
                    <ImageWidget
                        setWidget={setWidget}
                        editing={_widget.id === widget.id}
                        widget={widget}
                        display={_widget}/>
                  }
                </li>
            )
          }
        </ul>
      </div>
  )
}

  const stpm = (state) => {
    return {
      widgets: state.widgetReducer.widgets
    }
  }
  const dtpm = (dispatch) => {
    return {
      findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
          type: "FIND_WIDGETS",
          widgets
        }))
      },
      createWidget: (topicId) => {
        widgetService
        .createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
        .then(widget => dispatch({
          type: "CREATE_WIDGET",
          widget
        }))
      },
      updateWidget: (widget) => {
        widgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({
          type: "UPDATE_WIDGET",
          widget
        }))
      },
      deleteWidget: (widget) => {
        widgetService.deleteWidget(widget.id)
        .then(status => dispatch({
          type: "DELETE_WIDGET",
          widgetToDelete: widget
        }))
      }
    }
  }

export default connect(stpm, dtpm)(WidgetList)