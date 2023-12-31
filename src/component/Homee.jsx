import React from "react";
import { Link } from "react-router-dom";

export default function Homee({ data }) {
  return (
    <div className="cards">
      {data.posts.map((post) => (
        <div className="cardd" key={post.id}>
          <div className="img-wrapper">
            <img src={`https://ytimg.googleusercontent.com/vi/${post.url.split("v=")[1]}/sddefault.jpg`} alt={post.title}></img>
          </div>
          <div>
            <h3>{post.title}</h3>
            <p>{post.content.slice(0, 100) + '...'}</p>
            <Link to={`/blogpost/${post.id}`}>Watch</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
