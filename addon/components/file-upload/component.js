import Ember from 'ember';
import layout from './template';

const {
	assert,
	computed,
	get,
	isEmpty,
	isPresent,
	on,
	merge
} = Ember;

export default Ember.Component.extend({
  layout,
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
  addonCallback: ['always', 'change', 'chunkalways', 'chunkdone', 'chunkfail', 'chunksend', 'done', 'dragover', 'drop', 'fail',
  								'progress', 'progressall', 'paste', 'send', 'start', 'stop', 'submit'],

  fileUploadID: computed({
    get() {
      return `fileUpload_${get(this, 'elementId')}`;
    },
    set(key, value) {
      return value;
    }
  }),
  fileuploadClass: 'jquery-file-upload',

  initializeComponent: on('didInsertElement', function() {
    assert(`You can't use this addon without an url`, !isEmpty(get(this, 'url')));

    let _self = this;
    let $DOM = this.$();
    let options = merge(this._compileOptions());
    let fileupload = $DOM.fileupload(merge(options, _self._defaultCallbacks(_self)));

    this._bindCallbacks(fileupload);

    this.sendAction('fileUploadInit', fileupload, this);
  }),

  /* Private method
   * Used to compile all the available addon options
   */
  _compileOptions() {
    let options = get(this, 'addonProperties');
    let compiledOption = {};

    options.forEach((value) => {
      let optionValue = get(this, value);

      if (!optionValue) {
        return;
      }

      compiledOption[value] = optionValue;
    });

    return compiledOption;
  },

  /* Private method
   * Used to compile all the available addon callback methods
   */
  _bindCallbacks(fileupload) {
    let methods = get(this, 'addonCallback');
    let _self = this;

    methods.forEach((method) => {
      fileupload.bind(`fileupload${method}`, function(e, data) {
        _self.sendAction(`onFileupload${method}`, e, data, _self);
      });
    });
  },

  /* Private method to directly merge with fileupload options */
  _defaultCallbacks(_self) {
    let defaults = {
      add(e, data) {
        _self._fileuploadadd(e, data, _self);
      }
    };
    return defaults;
  },

  /* Private method
   * Used to trigger fileuploadadd.
   */
  _fileuploadadd(e, data, _self) {
    _self.sendAction('onFileuploadadd', e, data);

    if (isPresent(get(_self, 'autoUpload')) && !get(_self, 'autoUpload')) {
      return;
    }

    data.submit()
        .success((result, textStatus, jqXHR) => {
          _self.sendAction('onFileuploadsuccess', e, { result, textStatus, jqXHR });
        })
        .error((jqXHR, textStatus, errorThrown) => {
          _self.sendAction('onFileuploaderror', jqXHR, textStatus, errorThrown);
        })
        .done((result, textStatus, jqXHR) => {
          _self.sendAction('onFileuploaddone', e, { result, textStatus, jqXHR });
        });
  }
});
