/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Alert } from 'react-native';
import MainView from '../views/MainView';
import { render, fireEvent, screen} from '@testing-library/react'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

afterEach(() => {    
  jest.clearAllMocks();
});

it('renders correctly', () => {
  renderer.create(<MainView />);
});

describe('Given MainView', () => {
  test('When Alien Button Then Hello Alien', () => {
    // Given
    render(<MainView />);
    const spyAlert = jest.spyOn(Alert, 'alert');

    // When
    fireEvent.click(screen.getByText('👽'));

    // Then
    expect(spyAlert).toHaveBeenCalledWith('Meaning', 'Hello Alien');
  });

  test('When Robot Button Then Hello Robot', () => {
    // Given
    render(<MainView />);
    const spyAlert = jest.spyOn(Alert, 'alert');

    // When
    fireEvent.click(screen.getByText('🤖'));

    // Then
    expect(spyAlert).toHaveBeenCalledWith('Meaning', 'Hello Robot');
  });

  test('When Ghost Button Then Hello Ghost', () => {
    // Given
    render(<MainView />);
    const spyAlert = jest.spyOn(Alert, 'alert');

    // When
    fireEvent.click(screen.getByText('👻'));

    // Then
    expect(spyAlert).toHaveBeenCalledWith('Meaning', 'Hello Ghost');
  });
});
