import Ember from 'ember';

const {
	get,
	getWithDefault,
	on
} = Ember;

export default Ember.TextField.extend({
  type: 'file',

  defaults: {
  	dataType: 'json'
  },
  addonProperties: ['autoUpload', 'bitrateInterval',
  					'dataType', 'dropZone', 
  					'fileInput', 'forceIframeTransport', 'formAcceptCharset', 'formData',
  					'initialIframeSrc',
  					'limitConcurrentUploads', 'limitMultiFileUploads', 'limitMultiFileUploadSize', 'limitMultiFileUploadSizeOverhead',
  					'maxChunkSize', 'multipart',
  					'paramName', 'pasteZone', 'postMessage', 'progressInterval',
  					'replaceFileInput', 'recalculateProgress', 'redirect', 'redirectParamName',
  					'sequentialUploads', 'singleFileUploads', 
  					'type', 
  					'url', 'uploadedBytes'],

  // TODO:: Initially no sendaction is being done. Need to do this.
  addonCallback: ['add', 'submit', 'send', 'done', 'fail', 'always', 'progress', 'progressall', 'start', 'stop', 'change', 'paste', 'drop', 'dragover', 'chunksend', 'chunkdone', 'chunkfail', 'chunkalways'],

  initializeComponent: on('didInsertElement', function() {
  	let $DOM = this.$();
  	let options = get(this, 'addonProperties');
  	let compiledOption = {};

  	options.forEach((value) => {
  		compiledOption[value] = get(this, value) || getWithDefault(this, `defaults.${value}`);
  	});

  	$DOM.fileupload(compiledOption);
  })
});
