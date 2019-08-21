import React, {useState, useContext, useEffect} from 'react';
import styled from "styled-components";
import Missiles from './missiles';
import FinishLine from './finish-line';
import Player from './player';
import Timer from './timer';

const Wrapper = styled.div`
    height: 70%;
`;

const PlayGround = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const PlayerDiv = styled.div`
position: absolute;
  z-index: 999px;
`;

const MissilesDiv = styled.div`
    margin-left: 50px;
    position: absolute;
    display: flex;
    width: 80%;
    justify-content: space-around;
`;

const FinishLineDiv = styled.div`
    margin-left: 1300px;
  position: absolute;
`;

const time = 0;
const Main: React.FC = () => {
    return (
        <Wrapper>
            <Timer />
            <PlayGround>
                <PlayerDiv>
                    <Player />
                </PlayerDiv>
                <MissilesDiv>
                    <Missiles />
                </MissilesDiv>
                <FinishLineDiv>
                    <FinishLine />
                </FinishLineDiv>
            </PlayGround>
        </Wrapper>
    );
}
export default Main;
