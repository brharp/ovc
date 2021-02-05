import PropTypes from 'prop-types';
import React from 'react';
import LinksOuter from './linksOuter'
import LinksElement from './linksElement'

import { contentExists } from '../utils/ug-utils';
/*

LinksItems.propTypes = {
    pageData: PropTypes.array, - should contain only the Links Widget data in field_widgets
	displayType: PropTypes.string, - indicates if the links should be displayed as a grid or a list (Default List)
	heading: PropTypes.string, - optional - overall header - if exists it will be displayed
	headingLevel: PropTypes.string, - heading level for the optional header (Defalt h2)
	description: PropTypes.string, - optional - description to be displayed before the list or grid
	numColumns: PropTypes.number, - number of columns to use if there is a grid (default is 4)
}

LinksOuter -	sets the outer container, places the Links Widget Heading, if there is one - at headingLevel passed to it (default - h2)
				can add any Extra Classes, Links Widget Heading, Links Widget Description, and Display Type.
				
	LinksElement - returns the individual element for the Links (grid or list) - Needs: Link URL, Heading for the Link, Display Type
					optionally Image, Link Heading Level, numColumns, and outer tag (note inner tags will be set based on display type)
	

Example Usage:
    <LinksOuter extraClasses="my-grid", heading="my-links-heading", description="my-links-description", displayType="grid (or List)">

	LinksElement key={my-content.drupal_id} 
				url={urlLink} 
				image={imageFile} 
				headingLink={paragraph.field_link_url.title}
				headingLinkLevel= {nextHeadingLevel}
				numColumns={4} 
				displayType={grid}
				tag={"ul"}/>	
      

    </LinksElement>
*/

function LinksItems (props) {
	const aliasData = require('../../config/aliases/aliasfile.yml');

		if(contentExists(props.pageData) && props.pageData.length !== 0){
			return (
				<React.Fragment>
				<LinksOuter key={props.pageData.drupal_id} heading={props.heading} headingLevel={props.headingLevel} description={props.description} 
								displayType={props.displayType}>
					{props.pageData.map (paragraph  => {
						if(contentExists(paragraph.relationships)){
						// if images exists - set the images to use in the grid display
						const image = (contentExists(paragraph.relationships.field_link_image)) ? paragraph.relationships.field_link_image.relationships.field_media_image : null;
						const imageFile = (contentExists(image) && contentExists(image.localFile.childImageSharp)) ? 
												<img src={image.localFile.childImageSharp.resize.src} alt="" /> : null;
						// set the link to the url provided, if internal Drupal link (entity or internal) - clean up the URI to work with Link command,
						// to handel a <noLink>, if external link pass through, otherwise set to null

						const urlLink = (contentExists(paragraph.field_link_url.uri)) ? (paragraph.field_link_url.uri.includes("entity:node/")) ? 
							aliasData[paragraph.field_link_url.uri.replace("entity:node/","")]: (paragraph.field_link_url.uri.includes("internal:/")) ? ("/") : (
							paragraph.field_link_url.uri.includes("<nolink>")) ? null : paragraph.field_link_url.uri :null;
						// set heading level to one lower based on the heading level of the header, if header does not exists set to h2
						const nextHeadingLevel = (props.displayType ==='grid')? (contentExists(props.heading))? (props.headingLevel === "h2")? "h3": 
										(props.headingLevel==="h3") ? "h4" : "h5": "h2": '';
						const setTag = (props.displayType === 'list') ? 'li': 'ul';
						return <LinksElement key={paragraph.drupal_id} 
									url={urlLink} 
									image={imageFile} 
									headingLink={paragraph.field_link_url.title}
									headingLinkLevel= {nextHeadingLevel}
									numColumns={props.numColumns} 
									displayType={props.displayType}
									tag={setTag}/> 
						}
						return null;
					})}
				</LinksOuter>
				</React.Fragment>
			)
		}
        return null;
}

LinksItems.propTypes = {
    pageData: PropTypes.array,
	displayType: PropTypes.string,
	heading: PropTypes.string,
	headingLevel: PropTypes.string,
	description: PropTypes.string,
	numColumns: PropTypes.number,

}
  
LinksItems.defaultProps = {
    pageData: ``,
	displayType: `list`,
	heading: ``,
	headingLevel: `h2`,
	description: ``,
	numColumns: 4,

  }

export default LinksItems
