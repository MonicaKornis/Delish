import { connect } from 'react-redux';
import { deleteComment, likeComment, unlikeComment } from '../../actions/comment_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentIndex from './comment_index';

const mapStateToProps = (state,ownProps) => {
  let likedComments = state.session.currentUser.likedCommentIds || [];
  return {
    comments: Object.values(state.entities.comments),
    likedComments: likedComments,
    currentUser: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    likeComment: id => dispatch(likeComment(id)),
    unlikeComment: id => dispatch(unlikeComment(id))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentIndex));
