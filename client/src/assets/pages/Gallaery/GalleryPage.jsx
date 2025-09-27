import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { photos } from "./GalleryData";

const GalleryPage = () => {
  const [index, setindex] = useState(-1);
  return (
    <>
      <h1 className="text-center m-5">Gallery</h1>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index: current }) => setindex(current)}
      />
      <div className="lightbox">
        <Lightbox
          index={index}
          slides={photos}
          open={index > 0}
          close={() => setindex(-1)}
        />
      </div>
    </>
  );
};

export default GalleryPage;