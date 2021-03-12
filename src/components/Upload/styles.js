import styled from 'styled-components';
import {motion} from 'framer-motion'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;

  img {
    width: 22.6vw;
    border: 3px solid black;
    border-radius: 10px;
    margin-bottom: 10px;

    @media screen and (max-width: 800px) {
      width: 210px;
    }
  }
`;

export const ColorsContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-row-gap: 2px;
  width: 22vw;
  position: relative;
  right: 4px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 20% 20% 20% 20% 20%;
    width: 200px;
  }
`;

export const UploadImageInput = styled.div`
  input[type='file'] {
    display: none
  }

  label {
    background-color: transparent;
    border: 3px solid #000;
    border-radius: 5px;
    display:inline-block;
    text-align: center;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    padding: 7px 20px 10px;
    width: 22.6vw;
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 20px;

    .icon {
      position: relative;
      font-size: 26px;
      right: 6px;
      top: 3px;
    }
  }

  input[type="file"]:focus + .label {
      transform: scale(2);
  }

  @media screen and (max-width: 927px) {
    label {
      font-size: 18px;
      
      .icon {
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    label {
      width: 210px;
    }
  }
`;