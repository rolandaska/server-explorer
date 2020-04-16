import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Dashboard from './Dashboard';


export const testComponentById = (testDescription, testItem) => {
    test(testDescription, () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
        const linkElement = getByTestId(testItem);
        expect(linkElement).toBeInTheDocument();
    });
}


testComponentById('renders #Action container', 'action-container');
testComponentById('#Action container has sort by Name button', 'name');
testComponentById('#Action container has sort by Distance button', 'distance');
testComponentById('#Server list container has spinner', 'spinner');
