// @flow strict
import { h } from 'preact';

import { Row } from './Column';
import { ClientColumn } from './columns/ClientColumn';

export const AtlasQuill = () => {
  return (
    <main className="atlas-quill">
      <h1 className="atlas-quill-heading">Atlas Quill</h1>
      <Row>
        <ClientColumn />
      </Row>
    </main>
  );
};
