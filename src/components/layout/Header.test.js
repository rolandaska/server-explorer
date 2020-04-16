import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from './Header';


export const testComponentById = (testDescription, testItem) => {
    test(testDescription, () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        const linkElement = getByTestId(testItem);
        expect(linkElement).toBeInTheDocument();
    });
}


testComponentById('renders #Header', 'header');
testComponentById('#Header has Log out link', 'link-logout');
