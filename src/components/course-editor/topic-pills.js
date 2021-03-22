import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicPills = (
    {
      topics,
      findTopicsForLesson,
      createTopic,
      updateTopic,
      deleteTopic,
    }) => {
  const {courseId, moduleId, lessonId, topicId, layout} = useParams();
  useEffect(() => {
      findTopicsForLesson(lessonId)
  }, [moduleId, lessonId])
  return (
      <div>
        <ul className="nav nav-pills">
          {
            topics.map(topic =>
                <li className="nav-item">
                  <EditableItem
                      key={topic._id}
                      active={topic._id === topicId}
                      to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                      updateItem={updateTopic}
                      deleteItem={deleteTopic}
                      topicId={topicId}
                      item={topic}/>
                </li>
            )
          }
          <li>
            <i onClick={() => createTopic(lessonId)}
               className="fas fa-plus"></i>
          </li>
        </ul>
      </div>)
}

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  }
}
const dtpm = (dispatch) => {
  return {
    findTopicsForLesson: (lessonId) => {
      topicService.findTopicsForLesson(lessonId)
      .then(topics => dispatch({
        type: "FIND_TOPICS",
        topics
      }))
    },
    createTopic: (lessonId) => {
      topicService
      .createTopic(lessonId, {title: "New Topic"})
      .then(topic => dispatch({
        type: "CREATE_TOPIC",
        topic
      }))
    },
    updateTopic: (topic) => {
      topicService.updateTopic(topic._id, topic)
      .then(status => dispatch({
        type: "UPDATE_TOPIC",
        topic
      }))
    },
    deleteTopic: (topic) => {
      topicService.deleteTopic(topic._id)
      .then(status => dispatch({
        type: "DELETE_TOPIC",
        topicToDelete: topic
      }))
    }
  }
}

export default connect(stpm, dtpm)(TopicPills)