import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, query, hits, nbPages, removePost } = useGlobalContext();
 
  //conditional rendering
  if (isLoading) {
    return (
      <div className="loading">
        Loading <span className="one">.</span>
        <span className="two">.</span>
        <span className="three">.</span>
      </div>
    );
  } else {
    return (
      <div className="stories">
        {hits.length > 0 ? (
          hits.map( current => {
            const { title, author, num_comments, url, objectID } = current;
            return (
              <div className="post" key={objectID}>
                <div className="title">{title}</div>
                <div className="author">
                  By <span>{author}</span> | <span>{num_comments}</span> comments
                </div>
                <div className="buttons">
                  <a href={url} target="_blank" className="readMe">
                    Read More
                  </a>
                  <button className="remove" onClick={() => removePost(objectID)}>Remove</button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="noDataFound">No Data Found...</div>
        )}
      </div>
    );
  }
};

export default Stories;
