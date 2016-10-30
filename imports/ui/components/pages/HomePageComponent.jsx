import React from 'react';

export const HomePageComponent = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
    postsReady: React.PropTypes.bool.isRequired,
    posts: React.PropTypes.array.isRequired,
    loadUser: React.PropTypes.func.isRequired,
    loadPosts: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
    register: React.PropTypes.func.isRequired,
  },
  componentDidMount: function () {
    this.props.loadUser();
    this.props.loadPosts();
  },
  render: function () {
    const posts = this.props.postsReady
      ? this.props.posts.map(post => <li key={post._id}>{post.title}</li>)
      : <li>Posts loading...</li>;

    const user = this.props.user.ready
      ? this.props.user.username
        ? <span>Logged in as <strong>{this.props.user.username}</strong>.</span>
        : 'You are not logged in.'
      : <span>User loading...</span>;

    const userButton = this.props.user.ready && this.props.user.username
      ? <button className="btn btn-default" onClick={this.props.logout}>Logout</button>
      : <button className="btn btn-default" onClick={this.props.register}>Register</button>;

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Demo - meteor-redux-middlewares package</h1>
            <ul>
              <li>
                <a href="https://github.com/samybob1/meteor-redux-middlewares-demo">
                  Demo sources on GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/samybob1/meteor-redux-middlewares">
                  Package sources and documentation on GitHub
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/meteor-redux-middlewares">
                  Package on npm
                </a>
              </li>
              <li>
                <a href="https://atmospherejs.com/samy/redux-middlewares">
                  Package on Atmosphere
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h1>Posts</h1>
            <p>The server updates the posts every 2 seconds.</p>
            <ul>
              {posts}
            </ul>
          </div>
          <div className="col-md-4">
            <h1>User</h1>
            <p>The server removes the users every 5 minutes.</p>
            {user}
            <hr/>
            <div>
              {userButton}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
