importScripts('goog-math-long.js', 'webogram-util.js');

onmessage = function() {
	var result = pqPrimeLong(goog.math.Long.fromString('1dfaf951107f49df', 16));
	postMessage({
		result: result
	});
};