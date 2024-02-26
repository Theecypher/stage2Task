import React, { useRef } from "react";

const HorizontalScrollComponent = () => {
  const containerRef = useRef(null);

  const handleScrollClick = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div
      style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
      ref={containerRef}
    >
      <div style={{ display: "inline-block", width: "2000px" }}>
        {/* Content that will be horizontally scrollable */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vestibulum, velit at tincidunt fermentum, mauris felis convallis libero,
        non lobortis eros ipsum in ligula. Cras consequat volutpat fermentum.
        Integer auctor auctor eros a dictum. Suspendisse potenti.
      </div>
      <br />
      <button onClick={() => handleScrollClick(-100)}>Scroll Left</button>
      <button onClick={() => handleScrollClick(100)}>Scroll Right</button>
    </div>
  );
};

export default HorizontalScrollComponent;
