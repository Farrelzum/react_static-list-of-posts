import React from 'react';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

interface Props {
  post: Post;
  users: User[];
  comments: Comment[];
}

export const PostInfo: React.FC<Props> = ({ post, users, comments }) => {
  const postUser = users.find(user => post.userId === user.id);
  const postComments = comments.filter(comment => post.id === comment.postId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {` Posted by  `}

          {postUser && <UserInfo user={postUser} />}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
      {postComments.length > 0 ? (
        <CommentList comments={postComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
