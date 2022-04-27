import React from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./index.css";

const BlogItem = ({
  blog: {
    description,
    link,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={ cover } alt="cover" />
      <Chip label={category} />
      <h3>
        <Link to={`/blog/${id}`}>{title}</Link>
      </h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;