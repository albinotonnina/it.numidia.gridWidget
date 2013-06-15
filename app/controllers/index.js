



$.buildGrid = function(){


	var grid = $.grid;
	var rowstoMake = 20;
	
	var data = [];

	var section = grid.Section();

	var cell = grid.Cell();
	cell.addIcon({
		icon: 'icon-trash',
		color: '#3312d3'
	});
	section.addCell(cell);

	var cell = grid.Cell();
	cell.addLabel({
		text: 'txt'
	});
	section.addCell(cell);

	var cell = grid.Cell();
	cell.addLabel({
		text: 'txt'
	});
	section.addCell(cell);

	var cell = grid.Cell();
	cell.addLabel({
		text: 'txt'
	});
	section.addCell(cell);


	var cell = grid.Cell();
	cell.addLabel({
		text: 'txt'
	});
	section.addCell(cell);


	var cell = grid.Cell();
	cell.addLabel({
		text: 'txt'
	});
	section.addCell(cell);		


	data.push(section);


	for (var r = 0; r < rowstoMake; r++) {

		/** ROW **/
		var row = grid.Row({
			className: 'celldata'
		});

		/** CELL **/
		var cell1 = grid.Cell({
			backgroundColor: '#c0c0c0'
		});
		cell1.addLabel({
			text: 'txt '+r,
		});
		row.addCell(cell1); /** END CELL **/

		/** CELL **/
		var cell2 = grid.Cell({
			backgroundColor: '#c0c0c0'
		});
		cell2.addIcon({icon: 'icon-trophy',
		color: '#3312d3'});
		row.addCell(cell2); /** END CELL **/


		/** CELL **/
		var cell3 = grid.Cell({
			backgroundColor: '#ffcc00'
		});
		cell3.addImage({src: '/images/referee.png',width:'15dp',height:'15dp'});
		row.addCell(cell3); /** END CELL **/



		/** CELL **/
		var cell4 = grid.Cell({
			backgroundColor: '#ffcc00'
		});
		cell4.addLabel({
			text: 'txt '+r,
		});
		row.addCell(cell4); /** END CELL **/



		/** CELL **/
		var cell5 = grid.Cell({
			backgroundColor: '#ffcc00'
		});
		cell5.addLabel({
			text: 'txt '+r,
		});
		row.addCell(cell5); /** END CELL **/



		/** CELL **/
		var cell6 = grid.Cell({
			backgroundColor: '#ffcc00'
		});
		cell6.addLabel({
			text: 'txt '+r,
		});
		row.addCell(cell6); /** END CELL **/


		data.push(row); /** END ROW **/

	}


	grid.init({
		data: data,
		fixedColumns: [30, 100]
	});

	grid.setClick($.gridClick);
}

$.gridClick = function(e) {
	alert("click: row " + e.row + ", column: " + e.column);
}



$.buildGrid();
$.index.open();

