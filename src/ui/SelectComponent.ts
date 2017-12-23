import { wire } from 'hyperhtml/esm';

function OptionComponent<T>(
  selectedValue: T,
  value: T,
  label: string
) {
  const isSelected = selectedValue === value;

  return wire()`
    <option value=${value} selected=${isSelected}>
      ${label}
    </option>
  `;
}

export interface SelectComponentOption<T> {
  value: T;
  label: string;
}

export function SelectComponent<T>(
  options: SelectComponentOption<T>[],
  selectedValue: T,
  onChangeCallback: (value: T) => void
) {
  return wire()`
    <select onChange=${handleOnChangeEvent.bind(null, options, onChangeCallback)}>
      ${options.map(option => OptionComponent(selectedValue, option.value, option.label))}
    </select>
  `;
}

function handleOnChangeEvent<T>(options: SelectComponentOption<T>[], onChangeCallback: (value: T) => void, event: Event) {
  // tslint:disable-next-line:no-any
  const selectedValue = (<any>event.target).value;

  // tslint:disable-next-line:triple-equals
  const selectedOption = options.find(option => option.value == selectedValue);

  if (selectedOption) {
    onChangeCallback(selectedOption.value);
  }
}
