import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    let commentLikes = this.props.likedComments.length || 0;
    this.handleCommentLike = this.handleCommentLike.bind(this);
    this.state = {commentIcon: 'black-thumbs-up', commentLikes: commentLikes };
    this.handleCommentLike = this.handleCommentLike.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  handleCommentLike(commentId){
    if(this.props.likedComments.includes(commentId)) {
      return (e) => {
        let likes = this.state.commmentId || 0;
        this.setState({commentIcon: 'black-thumbs-up', [commentId]: likes});
        return this.props.unlikeComment(commentId);
      };
    } else {
      return (e) => {
        let likes = this.state.commmentId || 0;
        likes = likes + 1;
        this.setState({commentIcon: 'red-thumbs-up', [commentId]: likes});
        return this.props.likeComment(commentId);
      };
    }
  }

  removeComment(commentId, authorId) {
    if(this.props.currentUser === authorId) {
      
      this.props.deleteComment(commentId);
    }
  }


  render(){
    if(this.props.comments.length === 0) return <div></div>;

    return(
      <div className='cooking-notes-container'>
        <h3 id='cooking-comments-header'>Cooking Notes</h3>
        <div className='cooking-notes'>
          <ul>
            {this.props.comments.map(  comment => {
              let commentId = comment.id;
              let commentAuthor = comment.authorName ? comment.authorName : 'Anonymous';
              let numLikes = comment.numLikes ? comment.numLikes : 0;
              let button = this.props.currentUser === comment.author_id ?   <button id='delete-button' onClick={() => this.removeComment(comment.id, comment.author_id)}>Delete</button>
                        : <div></div>;
              return (
                <div id='note'>
                  <div id='note-header'>
                    <h4 id='comment-author'>{comment.authorName}</h4>
                    <h4 id='date'> 2 days ago</h4>
                    {button}

                  </div>
                  <div id='comment-title'>{comment.title}</div>
                  <div id='comment-body'>{comment.body}</div>
                  <div id='note-footer'>
                    <div id='likes'>
                      <i className="fa fa-thumbs-up" onClick={this.handleCommentLike(comment.id)} id={this.state.commentIcon} aria-hidden="true"></i>
                      <span id='like-text'>{`${numLikes} people like this`}</span>
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
