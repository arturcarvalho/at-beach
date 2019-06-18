import React from "react";
import presets from "../../utils/presets";

function toCurrency(number) {
  const formatter = new Intl.NumberFormat(presets.countryCode, {
    style: "currency",
    currency: presets.currency
  });

  return formatter.format(number);
}

class CurrencyField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  toggleEdit = () => {
    this.setState(state => {
      return { isEditing: !state.isEditing };
    });
  };

  render() {
    const { number, labelText, onChange } = this.props;
    let numberInput;

    if (this.state.isEditing) {
      numberInput = (
        <input
          type="number"
          value={number}
          onBlur={this.toggleEdit}
          onChange={onChange}
          step="0.1"
        />
      );
    } else {
      numberInput = (
        <input
          type="text"
          value={toCurrency(number)}
          onFocus={this.toggleEdit}
          readOnly
        />
      );
    }

    return (
      <label>
        <span>{labelText}</span>
        {numberInput}
      </label>
    );
  }
}

export default CurrencyField;
