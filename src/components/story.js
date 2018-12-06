import React from 'react';

const Story = (props) => {
  // https://developer.chrome.com/apps/app_codelab_webview
// that is what I want to do but I am too brain dead to try tonight
  return(<object type="text/html" data={props.story}>
  {props.story}
</object>)

}

export default Story;
