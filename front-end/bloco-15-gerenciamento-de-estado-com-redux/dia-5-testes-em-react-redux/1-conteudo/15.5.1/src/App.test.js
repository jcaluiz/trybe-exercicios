// src/App.test.js
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import userEvent from '@testing-library/user-event';
import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

    expect(screen.getByText('5')).toBeInTheDocument();
  });
  test('teste com o valor padrão do reducer e teste se um clique funciona', () => {
    renderWithRedux(<App />)

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(screen.getByText('1')).toBeInTheDocument();
  })
  test('counter para 10, faça um clique do botão e o valor deve ir para 11', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }} })

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(screen.getByText('11')).toBeInTheDocument();
  })
});