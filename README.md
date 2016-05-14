# Ember-jq-fileupload

[![Build Status](https://travis-ci.org/abhilashlr/ember-jq-fileupload.svg?branch=master)](https://travis-ci.org/abhilashlr/ember-jq-fileupload)
[![NPM Version](https://img.shields.io/npm/v/ember-jq-fileupload.svg)](https://www.npmjs.com/package/ember-jq-fileupload)

This addon is an Ember wrapper on top of [jquery file upload](https://github.com/blueimp/jQuery-File-Upload).

All options are enabled in this addon. Please raise a request if you would like to see any options missed out.

## Usage:
{{file-upload <options> <callbacks>}}

* url is mandatory

## Options available:

### [autoUpload](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#autoupload)
### [bitrateInterval](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#bitrateinterval)
### [dataType](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#datatype)
### [dropZone](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#dropzone)
### [fileInput](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#fileInput)
### [forceIframeTransport](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#forceIframeTransport)
### [formAcceptCharset](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#formAcceptCharset)
### [formData](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#formData)
### [initialIframeSrc](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#initialIframeSrc)
### [limitConcurrentUploads](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#limitConcurrentUploads)
### [limitMultiFileUploadSize](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#limitMultiFileUploadSize)
### [limitMultiFileUploadSizeOverhead](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#limitMultiFileUploadSizeOverhead)
### [maxChunkSize](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#maxChunkSize)
### [multipart](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#multipart)
### [paramName](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#paramName)
### [pasteZone](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#pasteZone)
### [postMessage](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#postMessage)
### [progressInterval](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#progressInterval)
### [replaceFileInput](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#replaceFileInput)
### [recalculateProgress](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#recalculateProgress)
### [redirect](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#redirect)
### [redirectParamName](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#redirectParamName)
### [sequentialUploads](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#sequentialUploads)
### [singleFileUploads](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#singleFileUploads)
### [type](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#type)
### [url](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#url)
### [uploadedBytes](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#uploadedBytes)

## [Callback](https://github.com/blueimp/jQuery-File-Upload/wiki/Options#callback-options) methods available as sendActions:

'onFileuploadalways', 'onFileuploadchange', 'onFileuploadchunkalways', 'onFileuploadchunkdone', 'onFileuploadchunkfail', 'onFileuploadchunksend', 'onFileuploaddone', 'onFileuploaddragover', 'onFileuploaddrop', 'onFileuploadfail', 'onFileuploadprogress', 'onFileuploadprogressall', 'onFileuploadpaste', 'onFileuploadsend', 'onFileuploadstart', 'onFileuploadstop', 'onFileuploadsubmit', 'onFileuploadsuccess', 'onFileuploaderror', 'onFileuploadInit'

### onFileuploadsuccess(e, data):
When data is being submitted, this callback is triggered on success.

### onFileuploadInit(fileupload-instantiated-object, component-context):
This is triggered when the file upload component is rendered in place. Sends 2 properties with the file upload object and the component's current context. This could be useful for programatically stopping a file upload.

## Installation

ember install ember-jq-fileupload

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Contributing

* `git clone` this repository
* `npm install`
* `bower install`
