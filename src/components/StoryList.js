import React from 'react';
import ListItem from './ListItem'

const StoryList = ((props) => {
  const storyNodes = props.stories.map((story, index) => {return (
    <ListItem
    by = {story.by}
    url = {story.url}
    title = {story.title}
    key = {index}
    index = {index}
    onStorySelected = {props.handleStorySelected}
    />)

  })

  return(
    <div className = "storyList">
      <h2> Stories
        <ul>
          {storyNodes}
        </ul>
      </h2>
    </div>
  )
})

export default StoryList;
