
var worker = new Worker('worker.js');
worker.onmessage = function onWorkerMessage(event) {
	run.end(event.data.result);
};

var run = {

	start: function() {
		run.started = Date.now();
		document.getElementById('started').style.display = 'block';
		// Flush reflow
		document.body.offsetHeight;
	},

	end: function(result) {
		document.getElementById('started').style.display = 'none';
		alert('Done: ' + (Date.now() - run.started) / 1000);
	},

	startMain: function() {
		run.start();
		window.setTimeout(function startMainTimeout() {
			/* 1dfaf951107f49df - is just sample value */
			var result = pqPrimeLong(goog.math.Long.fromString('1dfaf951107f49df', 16));
			run.end(result);
		}, 1);
	},

	startWorker: function() {
		run.start();
		worker.postMessage('start');
	}

};