import { h } from 'preact';

export const Row = ({ children }) => (
  <section className="quill-row">
    {children}
  </section>
);

export const Column = ({ children }) => (
  <div className="quill-column">
    {children}
  </div>
);