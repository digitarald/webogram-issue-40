
var worker = new Worker('worker.js');
worker.onmessage = function onWorkerMessage(event) {
	run.end(event.data.result);
};

var run = {

	start: function() {
		run.start = Date.now();
	},

	end: function(result) {
		alert('Done: ' + (Date.now() - run.start) / 1000);
	},

	startMain: function() {
		window.setTimeout(function startMainTimeout() {
			run.start();
			/* 1dfaf951107f49df - is just sample value */
			var result = pqPrimeLong(goog.math.Long.fromString('1dfaf951107f49df', 16));
			run.end(result);
		});
	},

	startWorker: function() {
		run.start();
		worker.postMessage('start');
	}

};