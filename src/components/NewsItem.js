import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      mode,
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      source,
    } = this.props;
    return (
      <div>
        <div
          className="card"
          style={{
            borderColor: mode == "light" ? "black" : "white",
            borderWidth: "2px",
          }}
        >
          <div class="embed-responsive embed-responsive-16by9">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className="p badge rounded-pill bg-danger">
                {source.name}
              </span>
            </div>
            <img
              alt="Card image cap"
              class="card-img-top embed-responsive-item"
              style={{ height: "100px" }}
              src={
                !imageUrl
                  ? "https://static.sportingnews.com/1.33.1.6/themes/custom/tsn/logo.jpg"
                  : imageUrl
              }
            />
          </div>
          <div className="card-body">
            <h5 name="card-title">{title} </h5>
            <p className="card-text">
              {description}{" "}
              <a href={newsUrl} target="_blank" className="card-text">
                Read More
              </a>
            </p>
            {/* <href onClick={newsUrl} target="_blank">
              {" "}
              Read More
            </href> */}

            <div className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
