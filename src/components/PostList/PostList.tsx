import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';

interface Props {
  posts: Post[];
  users: User[];
  comments: Comment[];
}

export const PostList: React.FC<Props> = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} users={users} comments={comments} key={post.id} />
    ))}
  </div>
);
