// @flow strict
import { h, Fragment } from 'preact';

type Props = {
  title: string,
  description: string,
};

export const Detail = ({ title, description }: Props) => (
  <Fragment>
    <h4 className="quill-detail-title">{title}</h4>
    <p className="quill-detail-description">{description}</p>
  </Fragment>
);
