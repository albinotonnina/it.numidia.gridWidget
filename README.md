# Grid widget
This widget for the [Appcelerator](http://www.appcelerator.com) Titanium Alloy MVC framework provides a tableView that mimics a grid for showing tabular data, with support for labels, font icons (Fontawesome) and images.

## The repository
The repository contains a complete Titanium Alloy project, including the widget, optional external libs and assets and a demo app:
* `app/widgets/it.numidia.grid`: The widget itself.
* `app/lib`: A copy of [IconicFont](https://github.com/k0sukey/TiIconicFont)'s lib folder, required for using icons.
* `app/assets/fonts`: A subtree-merge of [Font Awesome](http://fortawesome.github.com/Font-Awesome/)'s font folder - one of the three icon fonts supported by IconicFont.

## Quick start
How to use this widget in your own project?

* Download the latest version of this repository.
* Copy `app/widgets/it.numidia.grid` to your app's `app/widgets` folder.
* Add the widget as a dependency to your app's `app/config.json` file:
	
```javascript
"dependencies": {
	"it.numidia.grid": "1.0"
}
```

* Require the widget in a view:

```xml
<Require id="grid" src="it.numidia.grid" type="widget" height="300dp" />

```

* Implement the grid (example code, not working:check the example app instead):
```javascript




	var grid = $.grid;

	var data = [];


	/** SECTION (TableViewSection) **/

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


	/** GRID ROWS **/


		/** ROW **/
		var row = grid.Row({
			className: 'celldata'
		});

		/** CELL **/
		var cell1 = grid.Cell({backgroundColor: '#c0c0c0'});

		cell1.addLabel({text: 'txt'});
		row.addCell(cell1); /** END CELL **/


		var cell2 = grid.Cell();
		cell2.addIcon({icon: 'icon-trophy',color: '#3312d3'});
		row.addCell(cell2); 

		data.push(row); 
		/** END ROW **/

		grid.init({
		data: data,
		fixedColumns: [30, 100]
		});

		grid.setClick(function(e){

			alert("click: row " + e.row + ", column: " + e.column);

		});

```


## Licenses
This project is licensed under the Apache Public License (Version 2). Please see the LICENSE.txt file for the full license.

The Font Awesome font is licensed under the [SIL Open Font License](http://scripts.sil.org/OFL). The Font Awesome pictograms are licensed under the [CC BY 3.0 License](http://creativecommons.org/licenses/by/3.0/). Attribution is no longer required in Font Awesome 3.0, but much appreciated.

You can get [Ligature Symbols](http://kudakurage.com/ligature_symbols/) for free. This Font is licensed under the SIL Open Font License for download and using. Ligature Symbols has broad support for the modern browser (Chrome, Safari, Firefox, iOS - Mobile Safari, Android Browser).

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2012 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.