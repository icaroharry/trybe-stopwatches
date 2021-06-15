import { useCallback, useContext, useEffect, useLayoutEffect, useMemo } from 'react';
import styled from 'styled-components';
import StopwatchContext from '../context/StopwatchContext';
import stopwatches from '../data/stopwatches';
import Card from './Card';
import Container from './Container';
import NotFound from './NotFound';

// Flexbox container
const Wrapper = styled.div`
  margin-top: 2rem;
`;

function Gallery() {
  const { filters: { textFilter, selectedCohorts, showAllCohorts, filteredList }, setFilters } = useContext(StopwatchContext);

  useEffect(() => {
    const filtered = stopwatches
      .filter(
        stopwatch => `${stopwatch.student}${stopwatch.repositoryUrl}turma ${stopwatch.cohort}`.toLowerCase()
          .includes(textFilter.toLowerCase())
      )
      .filter(stopwatch => selectedCohorts[stopwatch.cohort] || showAllCohorts)
        console.log(filtered);
    setFilters((filters) => ({ ...filters, filteredList: filtered }));
  }, [textFilter, selectedCohorts, showAllCohorts]);

  function renderList() {
    return filteredList.length ? filteredList
      .map(stopwatch => (
        <Card key={stopwatch.repositoryUrl} { ...stopwatch } />
      ))
      : <NotFound />
  }
  return (
    <Wrapper>
      <Container itemsBetween>
        {
          renderList()
        }
      </Container>
    </Wrapper>
  );
} 

export default Gallery;