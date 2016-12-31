import React from 'react';

export class HomePageComponent extends React.PureComponent {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    postsReady: React.PropTypes.bool.isRequired,
    posts: React.PropTypes.array.isRequired,
    postsSubscriptionStopped: React.PropTypes.bool.isRequired,
    loadUser: React.PropTypes.func.isRequired,
    loadPosts: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
    register: React.PropTypes.func.isRequired,
    stopPostsSubscription: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadUser();
    this.props.loadPosts();
  }

  render() {
    const postsButton = this.props.postsSubscriptionStopped
      ? <button className="btn btn-default" onClick={this.props.loadPosts}>Subscribe</button>
      : <button className="btn btn-default" onClick={this.props.stopPostsSubscription}>Stop subscription</button>;

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
            <hr/>
            <div>
              {postsButton}
            </div>
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
  }
}
