import React, { useRef } from "react";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.min.css";

const SwiperLayout = ({
  tag,
  className,
  innerContainerTag,
  innerContainerClassName,
  style,
  children,
}) => {
  const flickingRef = useRef(null);

  console.log(
    React.Children.toArray(children).map((child) => child.props.children),
    flickingRef.current?._panels,
    flickingRef.current?.panels
  );

  return (
    <Flicking
      ref={flickingRef}
      viewportTag={tag}
      className={className}
      cameraTag={innerContainerTag}
      cameraClass={innerContainerClassName}
      align={"prev"}
      bound={true}
      bounce={0}
      moveType={"freeScroll"}
      style={style}
    >
      {children}
    </Flicking>
  );
};
export default SwiperLayout;
