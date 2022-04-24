import React from "react";
import { Image, ImageGroup } from "react-fullscreen-image";
import Box from "../components/box";
import useFetch from "../components/fetch";
import Layout from "../components/layout";
import "../css/main.css";

// map, filter, reduce , find, every , some

const GalleryPage = () => {
  const fetchData = useFetch("http://localhost:1337/api/upload/files/");

  // 1. option
  if (fetchData) {
    return (
      <Layout pageTitle="Galerija" navName="nav-links">
        <Box>
          <div className="gallery-page">
            <h2 className="padding">Galerija</h2>
            {/* 2. option */}
            {fetchData ? (
              <ImageGroup>
                <ul className="images">
                  {fetchData?.map((i, idx) => (
                    <li key={`IMAGE_GROUP_ITEM_${i?.id}_${idx}`}>
                      <Image src={"http://localhost:1337" + i?.formats?.medium?.url} alt={i?.alternativeText} />
                    </li>
                  ))}
                </ul>
              </ImageGroup>
            ) : (
              <span>loading...</span>
            )}
          </div>
        </Box>
      </Layout>
    );
  }

  return null;
};

export default GalleryPage;
