// @flow strict
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

type FormProps = {
  onSubmit: () => void,
  children: Array<React$Node>,
};

export const Form = ({ onSubmit, children }: FormProps) => (
  <form
    className="quill-form"
    onSubmit={(event) => {
      event.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </form>
);

type SumbitProps = {
  buttonText: string
};


export const Submit = ({ buttonText }: SumbitProps) => (
  <input
    type="submit"
    className="quill-form-submit"
    value={buttonText}
  />
);

type LabelProps = {
  labelText: string
};

export const Label = ({ labelText }: LabelProps) => (
  <label className="quill-form-label">{labelText}</label>
);

type TextInputProps = {
  labelText: string,
  value: string,
  onChange: string => void,
};

export const TextInput = ({ labelText, value, onChange }: TextInputProps) => (
  <Fragment>
    <Label labelText={labelText} />
    <input
      className="quill-form-text-input"
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </Fragment>
)

type DateInputProps = {
  labelText: string,
  value: number,
  onChange: number => void,
};

export const DateInput = ({ labelText, value, onChange }: DateInputProps) => {
  const dateValue = new Date(value);

  const date = `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1).toString().padStart(2, '0')}-${dateValue.getDate().toString().padStart(2, '0')}`;
  const time = `${dateValue.getHours().toString().padStart(2, '0')}:${dateValue.getMinutes().toString().padStart(2, '0')}`
  
  return (
    <Fragment>
      <Label labelText={labelText} />
      <input
        className="quill-form-text-input"
        type="date"
        value={date}
        onInput={event => {
          const newDate = event.target.value;
          const [year, month, date] = newDate.split('-');
          const newDateValue = new Date(dateValue.getTime());
          newDateValue.setFullYear(year, month - 1, date);
          onChange(newDateValue.getTime());
        }}
      />
      <input
        className="quill-form-text-input"
        type="time"
        value={time}
        onInput={event => {
          const newTime = event.target.value;
          const [hour, minutes] = newTime.split(':');
          const newTimeValue = new Date(dateValue.getTime());
          newTimeValue.setHours(hour, minutes, 0, 0);
          onChange(newTimeValue.getTime());
        }}
      />
    </Fragment>
  );
};