import uuid from uuid;

//action types
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMBS_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMBS_DOWN_COMMENT; = 'THUMB_DOWN_COMMENT';

//action creators
function addComment(comment) {
  return {
    type: ADD_COMMENT,
    text: comment,
    id: uuid.v4()
  }
}

function editComment(id, comment) {
  return {
    type: EDIT_COMMENT,
    text: comment,
    id: id
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

function thumbsUpComment(id) {
  return {
    type: THUMBS_UP_COMMENT,
    id: id,
    score: +1
  }
}

function thumbsDownComment(id) {
  return {
    type: THUMBS_DOWN_COMMENT,
    id: id,
    score: -1
  }
}
