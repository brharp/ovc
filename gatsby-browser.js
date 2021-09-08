import React from "react";
import { useLayoutEffect } from "react";
import { ParallaxProvider, useController } from "react-scroll-parallax";

const ParallaxCache = () => {
    const { parallaxController } = useController();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, [parallaxController]);

    return null;
};

export const wrapPageElement = ({ element, props }) => {
  return <React.Fragment>
    <ParallaxProvider>
      {element}
      <ParallaxCache />
    </ParallaxProvider>
  </React.Fragment>
};

