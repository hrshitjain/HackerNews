import React from 'react';
import renderer from 'react-test-renderer';
import HeadLine from '../../../app/components/HeadLine';

describe('HeadLine component render', () =>{
    const component = renderer.create(<HeadLine/>).toJSON();

    it('snapshot test', () =>{
        expect(component).toMatchSnapshot();
    });
    
});