import React from 'react';
import styled, { keyframes } from "styled-components";
import { bounceInDown } from 'react-animations';
import ReactSVG from 'react-svg';

const Missile = styled.div`
    width: 30px;
    fill: #aaa;
    transform: rotate(40deg);
`;

const MissilesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 80%;
`;

const Bounce3s = styled(Missile)`
  animation: 3s ${keyframes `${bounceInDown}`} infinite
  `;
const Bounce4s = styled(Missile)`
  animation: 4s ${keyframes `${bounceInDown}`} infinite
  `;
const Bounce5s = styled(Missile)`
animation: 5s ${keyframes `${bounceInDown}`} infinite
`;

const Missiles: React.FC = () => {
    return (
        <MissilesContainer>
            <Bounce3s id='Bounce3s'>
                <ReactSVG
                src="missile.svg"
                />
            </Bounce3s>
            <Bounce4s id='Bounce4s'>
                <ReactSVG
                src="missile.svg"
                />  
            </Bounce4s>
            <Bounce5s id='Bounce5s'>
                <ReactSVG
                src="missile.svg"
                />
            </Bounce5s>
        </MissilesContainer>
    );
}

export default Missiles;
