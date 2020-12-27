import {shallowMount} from '@vue/test-utils';
import HelloWorld from '../components/HelloWorld';

describe('example', () => {
    test('should ', () => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg: 'hello,vue3',
            },
        });
        expect(wrapper.text()).toMatch('hello,vue3');
    });
});
