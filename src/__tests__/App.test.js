import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

describe('App', () => {
  it("renders button 'AC'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/AC/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '='", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/=/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '%'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/%/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '÷'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/÷/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button 'x'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/x/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '1'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/1/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '2'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/2/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '3'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/3/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '4'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/4/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '5'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/5/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '6'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/6/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '7'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/7/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '8'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/8/);
    expect(btnName).toBeInTheDocument();
  });

  it("renders button '9'", () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/9/);
    expect(btnName).toBeInTheDocument();
  });
});
