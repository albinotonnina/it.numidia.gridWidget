var args = arguments[0] || {};

var columnWidth = null;
var cellSpacing = -1;

var clickEvent = null;


exports.applyProperties = function(_properties) {
	$.Wrapper.applyProperties(_properties);
};

if (args) {
	exports.applyProperties(args);
}


exports.init = function(_params) {

	var gridWidth = _params.width ? _params.width : Ti.Platform.displayCaps.platformWidth;
	var data = _params.data ? _params.data : [];
	var fixedColumns = _params.fixedColumns ? _params.fixedColumns : [];


	if (data.length > 0) {
		var numberOfColumns = _params.data[0].Cells.length;

		if ((columnWidth == null) || (columnWidth.length != numberOfColumns)) {

			columnWidth = [];

			if (fixedColumns != null) {
				for (var f = 0; f < fixedColumns.length; f++) {
					columnWidth.push(fixedColumns[f]);
					gridWidth -= fixedColumns[f] + cellSpacing;
					numberOfColumns--;
				}
			}

			var w = Math.floor(gridWidth / numberOfColumns) - cellSpacing;

			var w1 = gridWidth - (numberOfColumns - 1) * (w + cellSpacing);

			columnWidth.push(w1);

			for (var c = 1; c < numberOfColumns; c++) {
				columnWidth.push(w);
			}
		}


		DataBind(data);
	}
};



//
// Row
//
exports.Row = function(_row) {
	var row = _row ? _row : {};
	row.Cells = [];
	row.addCell = function(_cell) {
		this.Cells.push(_cell);
	}
	return row;
}

//
// Section
//
exports.Section = function(_section) {
	var section = _section ? _section : {};
	section.isSection = true;
	section.Cells = [];
	section.addCell = function(cell) {
		this.Cells.push(cell);
	}
	return section;
}

//
// Cell
//
exports.Cell = function(_props) {
	var cell = _props ? _props : {};
	cell.Entry = [];

	cell.addIcon = function(entry) {
		entry.entryType = "icon";
		this.Entry[cell.Entry.length] = entry;
	}

	cell.addLabel = function(entry) {
		entry.entryType = "label";
		this.Entry[cell.Entry.length] = entry;
	}

	cell.addImage = function(entry) {
		entry.entryType = "image";
		this.Entry[cell.Entry.length] = entry;
	}

	return cell;
}



exports.setClick = function(_clickEvent) {
	if ($.tableView != null) {
		// Remove previous event listener
		if (clickEvent != null) {
			$.tableView.removeEventListener('click', GridClick);
			clickEvent = null;
		}
		//Ti.API.info("Add new event listener");
		// Add new event listener
		if (_clickEvent != null) {
			clickEvent = _clickEvent;
			$.tableView.addEventListener('click', GridClick);
		}
	}
};



//
// GridClick
// Event handler for click events on tableviewrows.
// e: Event arguments.
//

function GridClick(e) {
	try {
		if (e.source != null) {
			
			if ((e.source.Grid != null) && (clickEvent != null)) {
				clickEvent({
					source: e.source.Grid,
					row: e.source.DataRow,
					column: e.source.DataColumn
				});
			}
		}
	} catch (exc) {
		throw exc;
	}
}

//
// DataBind
//

function DataBind(_data) {
	var tableViewData = [];
	for (var r = 0; r < _data.length; r++) {
		tableViewData.push(BindRow(r, _data[r]));
	}
	$.tableView.setData(tableViewData);
};


//
// BindRow
//

function BindRow(r, dataRow) {

	dataRow.height = dataRow.height ? dataRow.height : getRowHeight();

	var createOptions = {};
	_.extend(createOptions, _.pick(dataRow, 'height', 'width', 'backgroundColor', 'borderColor', 'borderWidth'));



	if (dataRow.isSection) {
		var row = Widget.createController("section", createOptions);
	} else {
		var row = Widget.createController("row", createOptions);
	}

	var x = 0;
	for (var c = 0; c < dataRow.Cells.length; c++) {
		var width = columnWidth[c];

		var view = BindCell(r, c, x, width, dataRow.height, dataRow.Cells[c]);
		for (var l = 0; l < view.length; l++) {
			row.addCell(view[l]);
		}
		x += width + cellSpacing;
	}


	if (dataRow.isSection) {
		var section = Ti.UI.createTableViewSection({
			headerView: row.getView()
		});
		return section;
	} else {
		return row.getView();
	}

};

//
// BindCell
// Binds the data to one cell.
// For internal use only!
// r: Number of the row.
// c: Number of the column.
// x: X-coordinate.
// width: Width of the column.
// height: Height of the row.
// dataCell: GridCell object with cell data.
//

function BindCell(r, c, x, width, height, dataCell) {
	var view = [];


	var cellOptions = {};

	_.extend(cellOptions, _.pick(dataCell, 'backgroundColor', 'borderColor', 'borderWidth'));

	_.extend(cellOptions, {
		left: x + 'dp',
		top: 0,
		width: width,
		height: height,
		DataRow: r,
		DataColumn: c,
		Grid: $.Wrapper
	});



	var cell = Widget.createController("cell", cellOptions);
	view.push(cell);
	if (dataCell.Entry.length > 0) {
		for (var e1 = 0; e1 < dataCell.Entry.length; e1++) {
			cell.setContent(dataCell.Entry[e1]);
		}
	}
	return view;
};



//
// getRowHeight
//

function getRowHeight() {
	return 32;
}