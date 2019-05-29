import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  // Mock response (fake out comments)
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{
      name: 'Fetched 1'
    }, {
      name: 'Fetched 2'
    }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  // Render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // Find 'Fetch Comments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Expect to find a list of comments
  moxios.wait(() => {
    // Force re-render
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    // Notify Jest that we're done
    done();
    wrapped.unmount();
  });
});