import { createGlobalStyle } from "styled-components";
import Container from "./components/Container.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";

import 'modern-normalize/modern-normalize.css';
import woff from './fonts/digital.woff';
import Logo from "./components/Logo.jsx";
import Gallery from "./components/Gallery.jsx";
import StopwatchContext from "./context/StopwatchContext.js";
import { useEffect, useState } from "react";
import Filters from "./components/Filters.jsx";
import stopwatches from "./data/stopwatches.js";

// Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Open Sans Regular'), local('OpenSans-Regular');
  }

  @font-face {
    font-family: 'Digital';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: url('${woff}') format('woff');
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background: #303030;
    color: #fff;
    padding: 1em;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    padding-left: calc(100vw - 100%);
  }
`;

function App() {
  const [filters, setFilters] = useState({
    textFilter: '', selectedCohorts: {}, showAllCohorts: false, filteredList: stopwatches
  });

  useEffect(() => {
    if (!Object.values(filters.selectedCohorts).includes(true)) {
      setFilters(filters => ({ ...filters, showAllCohorts: true }));
    } else {
      setFilters(filters => ({ ...filters, showAllCohorts: false }));
    }
  }, [filters.selectedCohorts, filters.showAllCohorts]);

  function openRandomStopwatch() {
    const randomStopwatch = filters.filteredList[Math.floor(Math.random() * filters.filteredList.length)];
    console.log(randomStopwatch)
    window.open(randomStopwatch.url, '_blank');
  }

  return (
    <StopwatchContext.Provider value={ { filters, setFilters, openRandomStopwatch } }>
      <AnimatedBackground />
      <Container column center>
        <Logo />
        <Filters />
        <Gallery />
      </Container>
      <GlobalStyle/>
    </StopwatchContext.Provider>
  );
}

export default App;
