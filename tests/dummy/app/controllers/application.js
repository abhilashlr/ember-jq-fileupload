import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		onFileuploadadd(e, data, comp) {
			console.log('File added', e, data, comp);
		},
		onFileuploadalways(e, data, comp) {
			console.log('File upload always triggered', e, data, comp);
		},
		onFileuploadchange(e, data, comp) {
			console.log('File changed', e, data, comp);
		},
		onFileuploadchunksend(e, data, comp) {
			console.log('File send chunk', e, data, comp);
		},
		onFileuploadchunkdone(e, data, comp) {
			console.log('File done with chunk', e, data, comp);
		},
		onFileuploadchunkfail(e, data, comp) {
			console.log('File failure in chunk', e, data, comp);
		},
		onFileuploadchunkalways(e, data, comp) {
			console.log('File chunk execution always', e, data, comp);
		},
		onFileuploaddone(e, data, comp) {
			console.log('File upload done', e, data, comp);
		},
		onFileuploaddragover(e, data, comp) {
			console.log('File upload area dragged over', e, data, comp);
		},
		onFileuploaddrop(e, data, comp) {
			console.log('File dropped into dragzone', e, data, comp);
		},
		onFileuploadfail(e, data, comp) {
			console.log('File upload failure', e, data, comp);
		},
		onFileuploadprogress(e, data, comp) {
			console.log('File upload progress', e, data, comp);
		},
		onFileuploadprogressall(e, data, comp) {
			console.log('File upload progress on all', e, data, comp);
		},
		onFileuploadpaste(e, data, comp) {
			console.log('File upload on paste', e, data, comp);
		},
		onFileuploadsend(e, data, comp) {
			console.log('File upload send', e, data, comp);
		},
		onFileuploadsubmit(e, data, comp) {
			console.log('File submit upload', e, data, comp);
		},
		onFileuploadstart(e, data, comp) {
			console.log('File start upload', e, data, comp);
		},
		onFileuploadstop(e, data, comp) {
			console.log('File stop upload', e, data, comp);
		}
	}
});
