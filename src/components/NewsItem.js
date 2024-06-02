import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      url,
      author,
      date,
      source = "unknown",
    } = this.props;
    return (
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-primary">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://cdn.zeebiz.com/sites/default/files/2024/01/26/277841-dividend.jpg"
          }
          className="card-img-top"
          style={{ width: "100%", height: "200px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By <b>{author ?? "Unknown"}</b> on{" "}
              <b>{new Date(date).toGMTString()}</b>
            </small>
          </p>
          <a
            href={url}
            className="btn btn-sm btn-primary"
            target="_blank"
            rel="no-referer"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
