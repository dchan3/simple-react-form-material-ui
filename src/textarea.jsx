import React, { useState, useRef } from 'react'
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

export default function TextareaComponent(props) {
  let [state, setState] = ({ value: props.value }), ref = useRef(null);

  function onKeyDown (event) {
    if (event.keyCode === 13) {
      props.onChange(event.target.value)
    }
  }

  function onBlur (event) {
    if (props.onBlur) {
      props.onBlur()
    }
    props.onChange(state.value)
  }

  function onChange (event) {
    setState({ value: event.target.value })
    if (props.changeOnKeyDown) {
      props.onChange(event.target.value)
    }
  }

  return (
      <TextField
          ref={ref}
          fullWidth={true}
          multiline={true}
          value={state.value || ''}
          label={props.useHint ? null : props.label}
          placeholder={props.useHint ? props.label : null}
          errortext={props.errorMessage}
          disabled={props.disabled}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          {...props.passProps} />
  )
}

TextareaComponent.propTypes = propTypes
TextareaComponent.defaultProps = defaultProps
