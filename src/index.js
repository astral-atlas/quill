// @flow strict
import { render, h } from 'preact';
import { AtlasQuill } from './components/AtlasQuill';

const main = () => {
  const body = document.body;
  if (body) {
    const rootReactElement = document.createElement('div');
    body.append(rootReactElement);
    render(<AtlasQuill />, rootReactElement)
  }
};

main();