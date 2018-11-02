import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from '@material-ui/core/DatePicker'
import {FieldType} from 'simple-react-form'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default class DatePickerComponent extends Component {

  openDialog () {
    if (this.props.disabled) return
    this.refs.input.openDialog()
  }

  render () {
    return (
      <div onTouchTap={this.openDialog.bind(this)}>
        <DatePicker
        ref='input'
        fullWidth
        value={this.props.value}
        label={this.props.useHint ? null : this.props.label}
        placeholder={this.props.useHint ? this.props.label : null}
        errorText={this.props.errorMessage}
        disabled={this.props.disabled}
        onChange={(_, date) => this.props.onChange(date)}
        {...this.props.passProps} />
      </div>
    )
  }
}

DatePickerComponent.propTypes = propTypes
DatePickerComponent.defaultProps = defaultProps
