import { connect } from 'react-redux';
import { stopSubscription } from 'meteor/samy:redux-middlewares';

import { loadItems, ITEMS_SUB } from '/imports/actions/items/load';

import { ItemsPageComponent } from '/imports/ui/components/pages/ItemsPageComponent';

const mapStateToProps = state => ({
  ready: state.items.ready,
  items: state.items.docs,
});

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems()),
  stopItemsSubscription: () => dispatch(stopSubscription(ITEMS_SUB)),
});

export const ItemsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsPageComponent);
