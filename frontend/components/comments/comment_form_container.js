import { connect } from 'react-redux';
import React from 'react';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

export const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser.name || 'Anon';
  return {
    currentUser: currentUser
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);
