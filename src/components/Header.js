// @flow strict
import { h } from 'preact';
import cx from 'classnames'

type Props = {
  selected?: boolean,
  headerText?: string,
};

export const Header = ({
  selected = false,
  headerText = '',
}: Props) => (
  <h3 className={cx(
    'quill-header',
    { 'quill-header-selected': selected }
  )}>
    {headerText}
  </h3>
);
