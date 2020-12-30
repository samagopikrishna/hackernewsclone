import React, { Component } from "react";
import axios from "axios";
class Data extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("https://hn.algolia.com/api/v1/search?tags=front_page")
      .then((response) => {
        this.setState({ data: response.data.hits });
      });
  }

  render() {
    let data;
    if (this.state.data.length <= 0) {
      data = <p>No elements</p>;
    }
    data = this.state.data.map((ele) => {
      let id = ele._tags[2].slice(6);
      let url = "https://news.ycombinator.com/item?id=" + id;
      return (
        <li key={ele.title}>
          <div>
            {" "}
            <a href={url}>
              <b>{ele.title}</b>
            </a>{" "}
            ({ele.url})
          </div>
          <p>
            {ele.points} | {ele.author} | {ele.num_comments} commens
          </p>
        </li>
      );
    });

    return <ul>{data}</ul>;
  }
}

export default Data;
