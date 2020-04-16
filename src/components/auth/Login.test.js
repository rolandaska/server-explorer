import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../../App'


export const testComponentById = (testDescription, testItem) => {
    test(testDescription, () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const linkElement = getByTestId(testItem);
        expect(linkElement).toBeInTheDocument();
    });
}


testComponentById('renders #Sign in form', 'form-sign-in');
testComponentById('#Sign in form has Username field', 'username');
testComponentById('#Sign in form has Password field', 'password');
testComponentById('#Sign in form has "Sign In" button', 'btn-sign-in');
