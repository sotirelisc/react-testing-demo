import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    // Trigger a fake 'change' event for 'onChange' callback
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment'
      }
    });
  
    // Force re-render of component
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    // Use props to check if value has been updated
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('empties the text area when form is submitted', () => {  
    wrapped.find('form').simulate('submit');
    wrapped.update();
  
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});