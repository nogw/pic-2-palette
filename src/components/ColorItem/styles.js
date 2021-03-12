import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  height: 5vw;
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.bgc};
  border: 3px solid black;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    height: 50px;
    width: 50px;
  }
`;
