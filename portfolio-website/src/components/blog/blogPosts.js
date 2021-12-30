import React, { Component } from "react";

// import { fetchBlogPosts } from "./blogHelpers";

class BlogPosts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchBlogPosts();
  }

  renderPosts() {
    const posts = this.state.posts.map((post) => {
      const date = new Date(post.pubDate);
      console.log(date);
      return (
        <li>
          <h2 key={post.guid}>{post.title}</h2>
          <p>{date.toDateString()}</p>
          {/* <div className="blog-post-content">{post.content}</div> */}
        </li>
      );
    });

    return <ul>{posts}</ul>;
  }

  render() {
    // console.log(this.state.posts);
    if (this.state.posts) {
      return <div>{this.renderPosts()}</div>;
    } else {
      return <h1>Loading...</h1>;
    }
  }

  fetchBlogPosts() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40cameronjameskingsley&api_key=i04qkl8ivtozytrcqqpbitvzx17zfgyubfkeyluk"
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json.items);
        this.setState({
          posts: json.items,
        });
      });
  }
}

export default BlogPosts;
