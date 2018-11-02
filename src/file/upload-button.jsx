import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton'
import _ from 'underscore'

const propTypes = {
  accept: React.PropTypes.string,
  label: React.PropTypes.any,
  multi: React.PropTypes.bool,
  onUpload: React.PropTypes.func.isRequired,
  passBase64: React.PropTypes.bool
}

const defaultProps = {
  label: 'Upload image',
  multi: false,
  accept: null,
  passBase64: false
}

export default class UploadButton extends Component {

  openFileDialog () {
    var fileInputDom = ReactDOM.findDOMNode(this.refs.input)
    fileInputDom.click()
  }

  handleFile (event) {
    _.keys(event.target.files).map((index) => {
      const file = event.target.files[index]

      if (this.props.passBase64) {
        const reader = new FileReader()
        reader.onload = (upload) => {
          const base64 = upload.target.result
          this.props.onUpload(file, base64)
        }

        reader.readAsDataURL(file)
      } else {
        this.props.onUpload(file)
      }
    })
  }

  render () {
    return (
      <div>
        <RaisedButton
          label={this.props.label}
          onClick={this.openFileDialog.bind(this)} />
        <input
          type='file'
          multiple={this.props.multi}
          ref='input'
          style={{ display: 'none' }}
          accept={this.props.accept}
          onChange={this.handleFile.bind(this)} />
      </div>
    )
  }

}

UploadButton.propTypes = propTypes
UploadButton.defaultProps = defaultProps
