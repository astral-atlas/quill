// @flow strict
import { h, Fragment } from 'preact';

type DetailProps = {
  title: string,
  description: string,
};

export const Detail = ({ title, description }: DetailProps) => (
  <Fragment>
    <h4 className="quill-detail-title">{title}</h4>
    <p className="quill-detail-description">{description}</p>
  </Fragment>
);

type DetailButtonProps = {
  text: string,
  onPress: () => void,
};

export const DetailButton = ({ text, onPress }: DetailButtonProps) => (
  <Fragment>
    <button onClick={() => onPress()}>{text}</button>
  </Fragment>
);
