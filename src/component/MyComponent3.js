

import PropTypes from 'prop-types';

function MyComponent3({title, content, writer}) {
  return (
    <div>
      <hr/>
      MyComponent3<br/>
      title :  {title}<br/>
      content : {content}<br/>
      writer : {writer}<br/>
    </div>
  ) 
  
}

MyComponent3.defaultProps = {
  writer : 'admin'
}

MyComponent3.propTypes = {
  title : PropTypes.string,
  content : PropTypes.string,
  writer : PropTypes.string
}
export default MyComponent3