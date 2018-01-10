import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if(!this.props.comments) return <div></div>;

    return(
      <div className='cooking-notes-container'>
        <div className='cooking-notes'>
          <ul>
            {this.props.comments.map(  comment => {
              return (
                <div id='note'>
                  <div id='note-header'>
                    <a id='comment-author'>{comment.authorName}</a>
                  </div>
                  <div id='comment-body'>{comment.title}</div>
                  <div id='comment-body'>{comment.body}</div>
                  <div id='note-footer'>
                    <div id='likes'>
                      <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                      <span id='like-text'>3 people like this</span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          </ul>
        </div>
      </div>
    );
  }
}

export default CommentIndex;
