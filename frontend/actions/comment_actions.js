import * as CommentApiUtil from '../util/comment_util';
export const RECEIVE_COMMENT = 'RECIEVE_COMMENT';
// export const RECEIVE_ALL_COMMENTS =  'RECIEVE_ALL_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECIEVE_COMMENT_ERRORS';
export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS';
export const RECEIVE_COMMENT_LIKE = 'RECEIVE_COMMENT_LIKE';
export const REMOVE_COMMENT_LIKE = 'REMOVE_COMMENT_LIKE';

const receiveComment = (payload) => {
  return {
    type: RECEIVE_COMMENT,
    payload
  };
};

const removeComment = (payload) => {
  return {
    type: REMOVE_COMMENT,
    payload
  };
};

const recieveCommentErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

const removeCommentErrors = (errors) => {
  return {
    type: REMOVE_COMMENT_ERRORS,
    errors
  };
};


const receiveCommentLike = (payload) => {
  return {
    type: RECEIVE_COMMENT_LIKE,
    payload
  };
};

const recieveCommentUnlike = (payload) => {
  return {
    type: REMOVE_COMMENT_LIKE,
    payload
  };
};


export const createComment = (comment) => (dispatch) => {
  return CommentApiUtil.createComment(comment).then((comment) => {
    return dispatch(receiveComment(comment));
  }, errors => {
    return dispatch(recieveCommentErrors(errors.responseJSON));
  }
  );
};

export const updateComment = (comment) => (dispatch) => {
  return CommentApiUtil.updateComment(comment).then((comment) => {
    return dispatch(receiveComment(comment));
  }, errors => {
    return dispatch(recieveCommentErrors(errors.responseJSON));
  }
  );
};

export const deleteComment = (commentId) => (dispatch) => {
  return CommentApiUtil.deleteComment(commentId).then(() => {
    return dispatch(removeComment());
  }, errors => {
    return dispatch(recieveCommentErrors(errors.responseJSON));
  }
  );
};

export const likeComment = (commentId) => (dispatch) => {
  return CommentApiUtil.likeComment(commentId).then( (payload) => {
    return dispatch(receiveCommentLike(payload));
  }
);
};

export const unlikeComment = (commentId) => (dispatch) => {
  return CommentApiUtil.unlikeComment(commentId).then( (payload) => {
    return dispatch(recieveCommentUnlike(payload));
  }
);
};
