import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';


Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;


jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
