import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class ItemsPageComponent extends PureComponent {
  static propTypes = {
    ready: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    loadItems: PropTypes.func.isRequired,
    stopItemsSubscription: PropTypes.func.isRequired,
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
