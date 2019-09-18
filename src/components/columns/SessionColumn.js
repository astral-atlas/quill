// @flow strict
import { h, Fragment } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';

import { CompassContext } from '../context';
import { Column } from '../Column';
import { Detail, DetailButton } from '../Detail';
import { Header } from '../Header';
import { List, ListButton } from '../List';
import { Form, Submit, TextInput, DateInput } from '../Form';

const SessionForm = ({ onSessionSubmit }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState(Date.now());

  const onSubmit = () => {
    onSessionSubmit(title, startTime);
    setTitle('');
    setStartTime(Date.now());
  };

  return (
    <Form onSubmit={onSubmit}>
      <Submit buttonText="Submit new Session" />
      <TextInput labelText="Title" value={title} onChange={setTitle} />
      <DateInput labelText="Start Time" value={startTime} onChange={setStartTime} />
    </Form>
  );
};

const useSessions = (compass) => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    compass.session.getSessions()
      .then(sessionResult => {
        if (sessionResult.type === 'success')
          setSessions(sessionResult.success);
      });
  }, [compass]);
  return sessions;
};

export const SessionColumn = () => {
  const compass = useContext(CompassContext);
  const sessions = useSessions(compass);

  return (
    <Fragment>
      <Column>
        <Header headerText="Sessions" />
        <SessionForm onSessionSubmit={(title, startTime) => compass.session.createSession(title, startTime)} />
        <List>
          {sessions.map((session) =>
            <ListButton
              key={session.id}
              onSelect={() => {}}
              selected={false}
            >
              <Detail title="SessionID" description={session.id} />
              <Detail title="Session" description={session.title} />
              <Detail title="Start Time" description={new Date(session.startTime).toLocaleString()} />
              <DetailButton text="Delete Session" onPress={() => void compass.session.deleteSession(session.id)} />
            </ListButton>
          )}
        </List>
      </Column>
    </Fragment>
  );
};