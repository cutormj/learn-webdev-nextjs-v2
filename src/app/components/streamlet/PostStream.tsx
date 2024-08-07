"use client"
import React from 'react';
import Stream from '../stream/Stream';
import Post from '../Post';
import Comment from '../Comment';
import { comment } from 'postcss';

const componentMap = {
  PostFeed: Post,
  CommentFeed: Comment,
  // Add other components here if needed
};

const componentData = [
  {
    id: 1,
    name: 'Post 1',
    type: 'PostFeed',
    showNodes: false,
    toggleButton: true,
    props: {
      id: 1,
      user: "User Name Test",
      time: "Today",
      postContent: "Hello there",
    },
    nodes: [
      {
        id: 1,
        name: 'Comment',
        type: 'CommentFeed',
        showNodes: true,
        toggleButton: true,
        props: {
          id: 100,
          user: "User Name Test",
          time: "Today",
          comment: "Hello there",
        },
        nodes: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Post 2',
    type: 'PostFeed',
    showNodes: true,
    toggleButton: true,
    props: {
      id: 100,
      user: "User Name Test",
      time: "Today",
      postContent: "Hello there",
    },
    nodes: [],
  },
  
];

const PostStream: React.FC = () => (
  <Stream componentMap={componentMap} componentData={componentData} />
);

export default PostStream;
