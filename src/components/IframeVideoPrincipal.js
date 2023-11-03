import React from "react";

function VideoPrincipal(props) {
    const {
      iframeSource = '<iframe src="https://player.vimeo.com/video/876469638?h=abbfb1f3cc&color=7EB420&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'
    } = props;
    return <div className="iframe-video" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
}

export default VideoPrincipal