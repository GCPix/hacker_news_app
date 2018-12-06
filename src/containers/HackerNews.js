import React, {Component} from 'react';
import StoryList from '../components/StoryList'
import Story from '../components/story'
import Header from '../components/Header'

class HackerNews extends Component{
  constructor(props) {
    super(props);
    this.state={
      selectedStory: "https://www.theglobeandmail.com/canada/article-canada-has-arrested-huaweis-global-chief-financial-officer-in/",
      stories: []
    }
    this.handleStorySelected = this.handleStorySelected.bind(this);
  };

   componentDidMount() {

    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res=>res.json())
    .then(ids=> {
      const newids = ids.slice(0,20)
      let promises = newids.map((id) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res=>res.json())
      })
      Promise.all(promises).then(results => {this.setState({stories: results})

      })
    })
  }

  handleStorySelected(index){
    const selectedStory = this.state.stories[0].url;
  this.setState({
    selectedStory: selectedStory})
  }

  render(){

    return (
      <div className = "mainPage">
          <Header/>
          <StoryList stories = {this.state.stories} onStorySelected = {this.handleStorySelected}/>
          <Story story = {this.state.selectedStory}/>
      </div>
    )
  }
}

export default HackerNews;
