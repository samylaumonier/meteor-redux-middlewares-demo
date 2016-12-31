import React from 'react';
import { Link } from 'react-router';

export class ItemsPageComponent extends React.PureComponent {
  static propTypes = {
    ready: React.PropTypes.bool.isRequired,
    items: React.PropTypes.array.isRequired,
    loadItems: React.PropTypes.func.isRequired,
    stopItemsSubscription: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadItems();
  }

  componentWillUnmount() {
    this.props.stopItemsSubscription();
  }

  render() {
    const items = this.props.ready
      ? this.props.items.map(item => <li key={item._id}>{item.title}</li>)
      : <li>Items loading...</li>;

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Items</h1>
            <p>The server updates the items every 2 seconds.</p>
            <ul>
              {items}
            </ul>
            <hr/>
            <div>
              <Link to="/">Go back to home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
