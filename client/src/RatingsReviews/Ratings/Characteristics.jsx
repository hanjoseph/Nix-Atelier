import React from 'react';
import styled from 'styled-components';
import CharBar from './CharBar.jsx';

function Characteristics(props) {
  return (
    <CharContainer>
      {!props.isLoaded && <p>l o a d i n g . . .</p>}
      {props.isLoaded && (


        <div>
          <CharBar
            rating={props.meta.characteristics.Fit.value}
            char="Fit"
            chars={['small', 'perfect', 'large']}
          />
          <CharBar
            rating={props.meta.characteristics.Length.value}
            char="Length"
            chars={['short', 'perfect', 'long']}
          />
          <CharBar
            rating={props.meta.characteristics.Comfort.value}
            char="Comfort"
            chars={['poor', 'ok', 'perfect']}
          />
          <CharBar
            rating={props.meta.characteristics.Quality.value}
            char="Quality"
            chars={['poor', 'expected', 'perfect']}
          />
        </div>
      )}
    </CharContainer>
  );
}

const CharContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  font-size: small;
`


export default Characteristics;