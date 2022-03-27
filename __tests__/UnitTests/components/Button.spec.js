import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../../app/components/Button';
import { HeadlinesStyle } from '../../../app/css/HeadLinesStyle';

const defaultProps = {
    text: 'Load more',
    onPress: jest.fn() ,
    containerStyle: HeadlinesStyle.container,
    textStyle: HeadlinesStyle.loadText
}
const getComponent = (props = defaultProps) => shallow(<Button {...props}/>);
const getInstance = (component) => component.instance();

describe('Button component render', () =>{
    const component = getComponent();
    const instance = getInstance(component);

    it('snapshot test', () =>{
        expect(component).toMatchSnapshot();
    });
    
    it('test button text', () =>{
        const render = wrapper.dive();
        render.find('TouchableHighlight').simulate('onPress');
        expect(defaultProps.onPress).toHaveBeenCalled();
    });
});