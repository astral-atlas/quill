// @flow strict
import { h } from 'preact'
import cx from 'classnames';

type ListProps = {
  children: React$Node,
};

export const List = ({
  children
}: ListProps) => (
  <ul className="quill-list">
    {children}
  </ul>
)

type ListButtonProps = {
  children: React$Node,
  onSelect?: () => void,
  selected?: boolean,
}

const noop = () => {};

export const ListButton = ({
  children,
  onSelect = noop,
  selected = false,
}: ListButtonProps) => (
  <li className="quill-list-element">
    <button
      className={cx(
        'quill-list-element-button',
        { 'quill-list-element-button-selected': selected }
      )}
      type="button"
      onClick={onSelect}
    >
    {children}
    </button>
  </li>
);
