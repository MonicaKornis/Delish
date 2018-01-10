import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentIndex from './comment_index';

const mapStateToProps = (state,ownProps) => {
  return {
    comments: Object.values(state.entities.comments)
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentIndex));
