import React from 'react';
import Formsy from 'formsy-react';
import Checkbox from 'material-ui/lib/checkbox';
import FormComponentMixin from './FormComponentMixin';

let FormsyCheckbox = React.createClass({
  mixins: [ Formsy.Mixin, FormComponentMixin ],

  componentDidMount: function () {
    this.setValue(this._checkbox.isChecked());
  },

  render: function () {
    return (
      <Checkbox
        {...this.props}
        ref={(c) => this._checkbox = c}
        onCheck={this.handleValueChange}
        checked={this.getValue()} />
    );
  }
});

module.exports = FormsyCheckbox;
