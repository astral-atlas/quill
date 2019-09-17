// @flow strict
import { h, createContext, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { createHTTPClientFromFetch } from '@lukekaalim/http-client';
import { createCompass } from '@astral-atlas/compass';

import { CompassContext } from '../context';
import { Column } from '../Column';
import { Detail } from '../Detail';
import { Header } from '../Header';
import { List, ListButton } from '../List';
import { Form, Submit, TextInput } from '../Form';
import { SessionColumn } from './SessionColumn';

const ClientForm = ({ onClientSubmit }) => {
  const [newClient, updateNewClient] = useState('');

  const onSubmit = () => {
    onClientSubmit(newClient);
    updateNewClient('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Submit buttonText="Submit new Client" />
      <TextInput labelText="Client Endpoint" value={newClient} onChange={updateNewClient} />
    </Form>
  );
};

const httpClient = createHTTPClientFromFetch(fetch, Headers);

const DEFAULT_ENDPOINTS = [
  'http://localhost:8080',
  'http://api.tome.1d9.tech',
];
export const ClientColumn = () => {
  const [endpoints, setEndpoints] = useState(DEFAULT_ENDPOINTS);
  const [selectedEndpoint, setSelectedEndpoint] = useState('http://localhost:8080');

  const compass = createCompass(selectedEndpoint, httpClient);

  return (
    <Fragment>
      <Column>
        <Header headerText="Clients" />
        <ClientForm onClientSubmit={newClient => setEndpoints([...endpoints, newClient])} />
        <List>
          {endpoints.map((endpoint) =>
            <ListButton
              key={endpoint}
              onSelect={() => setSelectedEndpoint(endpoint)}
              selected={endpoint === selectedEndpoint}
            >
              <Detail title="Client Endpoint" description={endpoint} />
            </ListButton>
          )}
        </List>
      </Column>
      {selectedEndpoint &&
        <CompassContext.Provider value={compass}>
          <SessionColumn />
        </CompassContext.Provider>
      }
    </Fragment>
  );
};
