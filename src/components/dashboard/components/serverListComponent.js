import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../../store';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Spinner from './../../ui/Spinner';
import Error from './../../ui/Error';

import { getServersList } from '../../../actions/getServersList-action';


const ServerListComponent = ({ sortBy }) => {
    const { serversList, error, loading } = useSelector(state => state.serverListReducer);

    useEffect(() => {
        store.dispatch(getServersList());
    }, []);

    const errorComponent = error && <Error message={error} />;
    const sortedServerList = _.orderBy(serversList, sortBy.type, sortBy.asc ? 'asc' : 'desc');

    return (
        <Fragment>
            {loading
                ? <div data-testid="spinner" className="flex-center spinner-container">
                    <Spinner />
                </div>
                : <div data-testid="server-list-container" className="white-box">
                    {errorComponent}
                    {sortedServerList.map((item, key) => (
                        <div className="server-item" key={key + item.name}>
                            <h5 className="title">{item.name}</h5>
                            <p className="description">Server distance | {item.distance} km.</p>
                        </div>)
                    )}
                </div>}
        </Fragment>
    )
}

ServerListComponent.propTypes = {
    sortBy: PropTypes.object.isRequired,
};

export default ServerListComponent;
