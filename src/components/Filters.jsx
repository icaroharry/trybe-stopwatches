import { useContext } from 'react';
import styled, { css } from 'styled-components';
import StopwatchContext from '../context/StopwatchContext';
import stopwatches from '../data/stopwatches';
import ShuffleImg from '../img/shuffle.png';

// Flexbox container
const Form = styled.form`
  margin-top: 2rem;
  z-index: 1;
  display: flex;
  flex-flow: column wrap;


  input[type="text"] {
    -webkit-appearance: none;
    outline: none;
    width: 20rem;
    height: 2rem;
    color: #ffffff7c;
    font-size: 0.8rem;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background: #303030;
    box-shadow: inset 8px 8px 8px #2a2a2a,
            inset -8px -8px 8px #323232;
  }

  .toggle-cohort {
    display: flex;
    justify-content: center;
  }
`;

const ToggleInput = styled.input`
  -webkit-appearance: none;
  margin: 1rem;
  width: 3rem;
  height: 3rem;
  background: #303030;
  box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
  2px 2px 6px rgba(30, 30, 30, 0.8);
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
      2px 2px 6px rgba(30, 30, 30, 0.8),
      inset -2px -2px 10px rgba(255, 255, 255, 0.05),
      inset 2px 2px 10px rgba(30, 30, 30, 0.5);
  }

  &:checked {
    color: #00fff1;
    box-shadow: inset -2px -2px 10px rgba(255, 255, 255, 0.05),
      inset 2px 2px 10px rgba(30, 30, 30, 1);
    text-shadow: 0 0 5px #00fff1, 0 0 20px #00fff1;
  }
`;

const ToggleLabel = styled.span`
  display: block;
  text-align: center;
  line-height: 1rem;
  margin-top: -56px;
  pointer-events: none;
  font-size: 1rem;
  font-family: 'Digital';
  letter-spacing: 0.1rem;

  ${props => props.glow && css`
    color: #affbbefa;
    font-weight: 600;
    text-shadow: 0 0 5px #affbbefa;
  `}
`;

const RandomizeButton = styled.button`
  -webkit-appearance: none;
  margin: 1rem;
  width: 3rem;
  height: 3rem;
  background: #31b98dff;
  box-shadow: -1px -1px 3px hsla(0, 0%, 100%, 0.1),
  2px 2px 6px rgba(30, 30, 30, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  img {
    height: 1rem;
  }

  &:hover {
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
      2px 2px 6px rgba(30, 30, 30, 0.8),
      inset -2px -2px 10px rgba(255, 255, 255, 0.05),
      inset 2px 2px 10px rgba(30, 30, 30, 0.5);
  }

  &:checked {
    color: #00fff1;
    box-shadow: inset -2px -2px 10px rgba(255, 255, 255, 0.05),
      inset 2px 2px 10px rgba(30, 30, 30, 1);
    text-shadow: 0 0 5px #00fff1, 0 0 20px #00fff1;
  }
`;

function Filters() {
  const { filters, setFilters, openRandomStopwatch } = useContext(StopwatchContext);

  function setSelectedCohorts(cohort, checked) {
    setFilters({ ...filters, selectedCohorts: { ...filters.selectedCohorts, [cohort]: checked } })
  }

  return (
    <Form>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filters.textFilter}
        onChange={(ev) => setFilters({ ...filters, textFilter: ev.target.value })}
      />

      <div className="toggle-cohort">
        {[...new Set(stopwatches.map(stopwatch => stopwatch.cohort))].map(cohort => (
          <label htmlFor="">
            <ToggleInput
              type="checkbox"
              onChange={(ev) => setSelectedCohorts(cohort, ev.target.checked)}
            />
            <ToggleLabel glow={filters.selectedCohorts[cohort]}>{cohort}</ToggleLabel>
          </label>
        ))}
        <RandomizeButton onClick={(ev) => ev.preventDefault() || openRandomStopwatch()}>
          <img src={ShuffleImg} alt="" />
        </RandomizeButton>
      </div>
    </Form>
  );
} 

export default Filters;