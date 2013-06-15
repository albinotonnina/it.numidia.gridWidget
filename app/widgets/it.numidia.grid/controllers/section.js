
function applyProperties(properties) {
	var apply = {};

		if (properties.height) {
			apply.height = properties.height;
		}
	
	$.Wrapper.applyProperties(apply);
}

if (arguments[0]) {
	applyProperties(arguments[0]);
}

exports.applyProperties = applyProperties;

exports.addCell = function(_cell){
$.Wrapper.add(_cell.getView());
}