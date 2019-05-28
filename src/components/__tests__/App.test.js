import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

const components = [{
  commentBox: CommentBox
}, {
  commentList: CommentList
}];

components.forEach(component => {
  it(`shows a ${Object.keys(component)}`, () => {
    expect(wrapped.find(Object.values(component)[0]).length).toEqual(1);
  });
});