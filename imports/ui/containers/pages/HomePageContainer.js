import { connect } from 'react-redux';

import { loadUser } from '/imports/actions/user/load';
import { loadHomePosts } from '/imports/actions/home/posts/load';
import { logout } from '/imports/actions/user/logout';
import { register } from '/imports/actions/user/register';

import { HomePageComponent } from '/imports/ui/components/pages/HomePageComponent';

const mapStateToProps = state => {
  return {
    user: state.user,
    postsReady: state.home.ready,
    posts: state.home.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      dispatch(loadUser());
    },
    loadPosts: () => {
      dispatch(loadHomePosts());
    },
    logout: () => {
      dispatch(logout());
    },
    register: () => {
      dispatch(register());
    },
  };
};

export const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);
