import React from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

class App extends React.Component {
  state = {
    value: '',
  }

  handleChange = (value) => {
    let newValues = value.filter( songRole => songRole.label !== "Required Songwriter" )

    this.setState({ value: newValues });
  }

  allValues() {
    return [
        {
          label: 'Primary', options: [
            { label: 'Composer', value: 'composer' },
            { label: 'Producer', value: 'Producer' },
          ]
        },
        { label: 'Strings', options: [
            { label: 'Violin', value: 'Violin'  },
            { label: 'Guitar', value: 'Guitar'  },
            { label: 'Bass', value: 'Bass'  },
          ]
        }
    ]
  }

  renderValue = (e) => {
    const style = {
      backgroundColor: "#d0021b",
      color: "white",
      padding: "10px",
      margin: "-4px -6px",
      border: "none"
    }

    if (e.label === "Required Songwriter") {
      return (
        <div style={style}>
          <h4>One Songwriter Required</h4>
          <p>
            You must assign the songwriter role to at least one Artist/Creative.
            Please add the songwriter role to another Artist/Creative before removing this one.
          </p>
        </div>
      )
    } else {
      return (
        <span className="Select-value-label" role="option" aria-selected="true" id="react-select-3--value-0">
          {e.label}
        </span>
      )
    }
  }

  render() {
    let value   = this.state.value;
    const style = { width: "25%", padding: "100px", margin: "auto" };

    if (value.length > 0) {
      value = [ ...this.state.value, { label: "Required Songwriter", value: "", clearableValue: false, color: "red" } ];
    }

    return (
      <div className="col-sm-4" style={style}>
        <Select
          multi
          closeOnSelect={false}
          arrowRenderer={null}
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={this.allValues()}
          valueRenderer={this.renderValue}
          clearable={false}
        />
      </div>
    )
  }
}

export default App;
