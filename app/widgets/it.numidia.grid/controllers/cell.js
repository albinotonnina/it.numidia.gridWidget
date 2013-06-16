exports.setContent = function(_props) {
	var content;
	switch (_props.entryType) {
	case "label":
		content = setLabel(_props);
		break;
	case "icon":
		content = setIcon(_props);
		break;
	case "image":
		content = setImage(_props);
		break;
	}

$.Container.add(content.getView());

}



function setLabel(_props) {
	return _label = Widget.createController("label", _props);
}

function setIcon(_props) {
	return _icon = Widget.createController("icon", _props);

}

function setImage(_props) {
	return Widget.createController("image", _props);
}


function applyProperties(_props) {


	var apply = {};

	//Underscode.js love
	_.extend(apply, _.pick(_props, 'height','width', 'backgroundColor', 'borderColor'));



	$.Wrapper.applyProperties(apply);
}

if (arguments[0]) {
	$.Wrapper.applyProperties(arguments[0]);
}

exports.applyProperties = applyProperties;