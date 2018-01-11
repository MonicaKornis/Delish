import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    let commentLikes = this.props.likedComments.length || 0;
    this.handleCommentLike = this.handleCommentLike.bind(this);
    this.state = {commentIcon: 'black-thumbs-up', commentLikes: commentLikes };
    this.handleCommentLike = this.handleCommentLike.bind(this);
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



  render(){
    if(this.props.comments.length === 0) return <div></div>;
    // let commentLikes = this.props.likedComments.length;
    return(
      <div className='cooking-notes-container'>
        <div className='cooking-notes'>
          <ul>
            {this.props.comments.map(  comment => {
              let commentId = comment.id;
              let likes = this.state[commentId] > 0 ? this.state[commentId] : 0;
              return (
                <div id='note'>
                  <div id='note-header'>
                    <h4 id='comment-author'>{comment.authorName}</h4>
                    <h4 id='date'> 2 days ago</h4>
                  </div>
                  <div id='comment-title'>{comment.title}</div>
                  <div id='comment-body'>{comment.body}</div>
                  <div id='note-footer'>
                    <div id='likes'>
                      <i class="fa fa-thumbs-up" onClick={this.handleCommentLike(comment.id)} id={this.state.commentIcon} aria-hidden="true"></i>
                      <span id='like-text'>{`${likes} people like this`}</span>
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
