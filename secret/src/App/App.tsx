import React from 'react';
import {Dropdown} from '../Dropdown';
import './App.css';

export function App() {
  return (
    <div className="app">
        <header>
            <Dropdown target='Expand'>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Dropdown>
        </header>
        <footer>
            <Dropdown target='Expand'>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Dropdown>
        </footer>
    </div>
  );
}

