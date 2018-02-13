import React from 'react';
import {Transition} from 'react-transition-group';
import merge from 'lodash/merge';



const defaultStyle = {display: 'none'};
const hoverDuration = 10000000;
const ratingHoverTransitionStyle = {
  entered: {display: "block",
            position: "absolute",
            left: -35,
            bottom: -20,
            width: "170px",
            height: "80px",
            border: "1px solid #F5F5F5",
            background: "white",
            zIndex: -1,
          },
  exited: {
          display: "none",
          }
};


export const HoverBox= ({ in: inProp, component: Component }) => {

  return (<Transition in={inProp} timeout={hoverDuration}>
    debugger
    {(state) => {
      const style = merge({}, defaultStyle, ratingHoverTransitionStyle[state]);
        return (<div style={style}>
          {Component}
        </div>);
    }}
  </Transition>
  );
};

export default HoverBox;

// {(state) => {
//   const style = merge({}, defaultStyle, ratingHoverTransitionStyle[state]);
//     return (<div style={style}>
//       {Component}
//     </div>);
