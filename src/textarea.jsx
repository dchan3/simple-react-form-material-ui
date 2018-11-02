import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import {FieldType} from 'simple-react-form'

const propTypes = {
  changeOnKeyDown: PropTypes.bool,
  ...FieldType.propTypes
}

const defaultProps = {
  changeOnKeyDown: false
}

export default class TextareaComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { value: props.value }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.value })
  }

  onKeyDown (event) {
    if (event.keyCode === 13) {
      this.props.onChange(event.target.value)
    }
  }

  onBlur (event) {
    if (this.props.onBlur) {
      this.props.onBlur()
    }
    this.props.onChange(this.state.value)
  }

  onChange (event) {
    this.setState({ value: event.target.value })
    if (this.props.changeOnKeyDown) {
      this.props.onChange(event.target.value)
    }
  }
  render () {
    return (
        <TextField
            ref='input'
            fullWidth={true}
            multiline={true}
            value={this.state.value || ''}
            label={this.props.useHint ? null : this.props.label}
            placeholder={this.props.useHint ? this.props.label : null}
            errortext={this.props.errorMessage}
            disabled={this.props.disabled}
            onChange={this.onChange.bind(this)}
            onKeyDown={this.onKeyDown.bind(this)}
            onBlur={this.onBlur.bind(this)}
            {...this.props.passProps} />
    )
  }
}

TextareaComponent.propTypes = propTypes
TextareaComponent.defaultProps = defaultProps
