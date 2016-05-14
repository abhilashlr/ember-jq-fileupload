/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-jq-fileupload',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/blueimp-file-upload/js/vendor/jquery.ui.widget.js');
    app.import('vendor/blueimp-file-upload/js/jquery.fileupload.js');
  }
};
