import React, { Component } from 'react'
import Toggle from '@material-ui/core/Toggle'
import {FieldType} from 'simple-react-form'
import styles from './styles'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default class ToggleComponent extends Component {

  render () {
    return (
      <div>
        <Toggle
          label={this.props.label}
          defaultToggled={!!this.props.value}
          disabled={this.props.disabled}
          onToggle={() => this.props.onChange(!this.props.value)}
          {...this.props.passProps}/>
        <div style={styles.errorMessage}>{this.props.errorMessage}</div>
      </div>
    )
  }

}

ToggleComponent.propTypes = propTypes
ToggleComponent.defaultProps = defaultProps
