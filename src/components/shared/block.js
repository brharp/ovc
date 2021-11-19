import React from "react"
import styled from "styled-components"

/*
  Add positioning and padding to the top of the block so anchor
  links are not hidden by the header / menu bar. The menu bar
  (as of this writing) is 75px tall. Adding 85px of padding to
  the top of the block results in anchor links scrolling the 
  block just into view, with 10px of space between the top of
  the block and the bottom of the header / menu. If the height
  of the menu bar changes, this value will need to be updated
  accordingly.
*/
const StyledBlock = styled.div`
  position: relative;
  top: -85px;
  padding-top: 85px;
  z-index: -1;
`

export default function Block (props) {
  return <StyledBlock id={props.id}>{ props.children }</StyledBlock>
}

