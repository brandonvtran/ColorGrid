import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme'
import ColorGrid from './ColorGrid';

configure({adapter: new Adapter()});

describe('Color Grid', () => {
  it('should render grid cell', () => {
    const grid = shallow(<ColorGrid />)
    expect(grid.find('.color-grid').length).toBe(1);
  });

  it('should render all 64 grid cells', () => {
    const grid = shallow(<ColorGrid />)
    expect(grid.find('.color-grid-cell').length).toBe(64);
  });
})