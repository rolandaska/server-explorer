import React, { Fragment, useState } from 'react';
import Header from './../layout/Header';
import ServerListComponent from './components/serverListComponent';

import './dashboard.scss';

const Dashboard = () => {

    const [sortBy, setSortBy] = useState({
        type: '',
        asc: false,
    });

    const changeHandler = (item) => {
        setSortBy({
            type: item,
            asc: !sortBy.asc,
        })
    }

    return (
        <Fragment>
            <Header />
            <div className="page-container">
                <div data-testid="action-container" className="white-box mb-2 flex-vertical-center">
                    <p className="bold">SORT BY</p>
                    <button data-testid="name" className="btn ml-1 mr-1" onClick={() => changeHandler('name')}>Name</button>
                    <button data-testid="distance" className="btn" onClick={() => changeHandler('distance')}>Distance</button>
                </div>
                <ServerListComponent sortBy={sortBy} />
            </div>
        </Fragment>
    );
};

export default Dashboard;
