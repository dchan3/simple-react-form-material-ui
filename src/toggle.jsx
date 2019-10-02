import React from 'react'
import Toggle from '@material-ui/core/Toggle'
import {FieldType} from 'simple-react-form'
import styles from './styles'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default function ToggleComponent(props) {
  return (
    <div>
      <Toggle
        label={props.label}
        defaultToggled={!!props.value}
        disabled={props.disabled}
        onToggle={() => props.onChange(!props.value)}
        {...props.passProps}/>
      <div style={styles.errorMessage}>{props.errorMessage}</div>
    </div>
  )
}

ToggleComponent.propTypes = propTypes
ToggleComponent.defaultProps = defaultProps
