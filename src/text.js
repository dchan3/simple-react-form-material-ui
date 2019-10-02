import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import {FieldType} from 'simple-react-form'

const propTypes = {
  ...FieldType.propTypes,
  fieldType: PropTypes.string
}

const defaultProps = {

}

export default function TextFieldComponent(props) {
  let [state, setState] = useState({ value: props.value }), ref = useRef(null);

  function onKeyDown (event) {
    if (event.keyCode === 13) {
      props.onChange(event.target.value)
    }
  }

  function onBlur (event) {
    if (props.onBlur) {
      props.onBlur()
    }
    props.onChange(event.target.value)
  }

  function isNumberType () {
    if (props.fieldSchema) {
      return props.fieldSchema.type === Number
    }
    if (props.fieldType === 'number') {
      return true
    }
    if (props.type === 'number') {
      return true
    }
    return false
  }

  function onChange (event, other) {
    const value = isNumberType() ? Number(event.target.value) : event.target.value
    props.onChange(value)
  }

  var fieldType = props.fieldType || this.type || 'text'
  return (
    <TextField
      ref={ref}
      fullWidth
      value={typeof props.value !== 'undefined' ? props.value : ''}
      type={fieldType}
      label={props.useHint ? null : props.label}
      placeholder={props.useHint ? props.label : null}
      errortext={props.errorMessage}
      disabled={props.disabled}
      onChange={onChange.bind(this)}
      onKeyDown={onKeyDown.bind(this)}
      onBlur={onBlur.bind(this)}
      {...props.passProps}
    />);
}

TextFieldComponent.propTypes = propTypes
TextFieldComponent.defaultProps = defaultProps

function StringFieldComponent(props) {
  return <TextFieldComponent {...props} type="text" />
}

function NumberFieldComponent(props) {
  return <TextFieldComponent {...props} type="number" />
}

function DateFieldComponent(props) {
  return <TextFieldComponent {...props} type="date" />;
}
