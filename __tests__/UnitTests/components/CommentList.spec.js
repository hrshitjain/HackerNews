import React from 'react';
import renderer from 'react-test-renderer';
import CommentsList from '../../../app/components/CommentsList';

describe('commentlist component render', () =>{
    const component = renderer.create(<CommentsList/>).toJSON();

    it('snapshot test', () =>{
        expect(component).toMatchSnapshot();
    });
    
});