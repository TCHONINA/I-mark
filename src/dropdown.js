import React, { Component } from "react";
import Select from "react-select";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: "Label1", label: "Label1" },
        { value: "Label2", label: "Label2" }
      ]
    };
  }

  handleChange = e => {
    let { onChange } = this.props;
    let v = e.value;
    onChange(v);
  };

  onDelete = () => {
    let { onDelete } = this.props;
    onDelete();
  };

  render() {
    console.log("annotator", this.props);
    return (
      <div className="row" style={{ width: "300%" }}>
        <div className="col col-md-8">
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={this.state.options}
          />
        </div>
        <div
          className="col col-md-4"
          style={{ float: "right", background: "white" }}
        >
          <i class="far fa-trash-alt" onClick={this.onDelete} />
        </div>
      </div>
    );
  }
}
