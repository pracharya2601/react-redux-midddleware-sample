import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }


    render() {
        const {user} = this.props;
        if( !user) {
            return null;
        }
        return(
            <div className="header">
                {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps ) => { // also get second argument which is its own props
    //ownProps is the reference to the props that are about to be get on UserHeader component
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);