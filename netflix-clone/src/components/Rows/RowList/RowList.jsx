import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/Requests";

function RowList() {
  return (
    <>
      <Row title="Animation Nature" fetchUrl={requests.fetchAnimationNature} isLargeRow={true} />
      <Row title="Nature Documentaries" fetchUrl={requests.fetchNatureDocumentaries} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      {/* 👧 Kids sections */}
      <Row title="Kids Animation" fetchUrl={requests.fetchKidsAnimation} />
      <Row title="Educational for Kids" fetchUrl={requests.fetchEducationalForKids} />
    </>
  );
}

export default RowList;
