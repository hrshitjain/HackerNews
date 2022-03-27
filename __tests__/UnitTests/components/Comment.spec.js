import React from 'react';
import renderer from 'react-test-renderer';
import Comment from '../../../app/components/Comment';

describe('comment component render', () =>{
    const component = renderer.create(<Comment/>).toJSON();

    it('snapshot test', () =>{
        expect(component).toMatchSnapshot();
    });
    
});