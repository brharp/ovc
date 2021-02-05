// combine multiple body values and place sticky values at the top
function combineAndSortBodyFields (content) {
	let stickyContent = [];
	let allContent = [];

	if (contentIsNullOrEmpty(content)) { return ""; }

	content.forEach((edge) => {
		if (!contentIsNullOrEmpty(edge.node.body.processed)) {
			if (edge.node.sticky === true) {
				stickyContent.push(edge.node.body.processed);
			} else {
				allContent.push(edge.node.body.processed);
			}
		}
	})
	
	allContent.unshift(stickyContent);
	return allContent.join("");
}

function contentExists(content) {
	if (!contentIsNullOrEmpty(content)) {
		return true;
	}
	return false;
}

function contentIsNullOrEmpty(content) {
	if (content === null || content === undefined || content === "" || 
	(Array.isArray(content) && (content.length === 0))) {
		return true;
	}
	return false;
}

// Source: https://flaviocopes.com/how-to-divide-array-js/
function divideIntoColumns(data, numColumns) {
	let dividedData = [];
	let itemsPerRow = Math.ceil(data.length / numColumns);

	for (let i=0; i<numColumns; i++) {
		dividedData.push([]);
	}

	for (let row = 0; row < numColumns; row++) {
		for (let i = 0; i < itemsPerRow; i++) {
			const value = data[i + row * itemsPerRow]
			if (!value) continue //avoid adding "undefined" values
			dividedData[row].push(value)
		}
	}

	return dividedData;
}

function fetchMenu(whichMenu) {
	if (contentExists(whichMenu)) {
		try {
			var menuData = require('../../config/sitemaps/' + whichMenu + '.yml');
			return menuData;
		} catch (e) {
			if (e instanceof Error && e.code === "MODULE_NOT_FOUND") {
				console.log("Can't load " + menuData);
			} else {
				throw e;
			}
		}
	}
	return null;
}

function fetchMenuMain() {
	// Commenting this out due to build error on pipeline
	//const config = require('../../gatsby-config');	
	//const mainMenu = config.siteMetadata.menus[0];
	const mainMenu = "main";
	return mainMenu;
}

function getNextHeadingLevel(headingLevel) {
	let level = parseInt(headingLevel.replace(/[^\d.]/g,'')) + 1;
	let nextHeadingLevel = setHeadingLevel('h' + level);
	return nextHeadingLevel;
}

function setHeadingLevel(headingLevel) {
	// console.log(headingLevel, "setHeadingLevel")
	const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
	const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
	const selectedHeading = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';
	return selectedHeading;
}

function sortLastModifiedDates(dates) {
	return dates.slice().flat().sort();
}

function stripHTMLTags(content) {
	return content !== null ? content.replace(/(<([^>]+)>)/ig,"") : ``;
}

export { 
	combineAndSortBodyFields,
	contentExists,
	contentIsNullOrEmpty,
	divideIntoColumns,
	fetchMenu,
	fetchMenuMain,
	getNextHeadingLevel,
	setHeadingLevel,
	sortLastModifiedDates,
	stripHTMLTags
   };
