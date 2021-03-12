import React, { useState } from 'react';
import imageTesting from './img2test.jpeg'
import ColorThief from 'colorthief'
import { Container, ColorsContainer, UploadImageInput } from './styles';
import { AiFillFileImage } from 'react-icons/ai';
import ColorItem from '../ColorItem';
function Upload() {
  const [colors, setColors] = useState([])
  const [image, setImage] = useState(imageTesting)
  const imgRef = React.createRef()

  const handleLoad = () => {
    const colorThief = new ColorThief();
    const img = imgRef.current;
    const result = colorThief.getPalette(img);
    setColors(result)
  }

  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')

  const readImage = imgFile => {
    var reader = new FileReader();

    reader.onload = e => {
      setImage(e.target.result)
    }

    reader.readAsDataURL(imgFile)
  }

  return (
    <Container>
      <UploadImageInput>
        <label className="label" htmlFor='fileImg'>
            <AiFillFileImage className="icon"/>
            Open Image
            <input type="file" id="fileImg" className="fileImg" onChange={e => readImage(e.target.files[0])} />
        </label>
      </UploadImageInput>
      <img 
        src={image}
        ref={imgRef}
        alt="reference"
        onLoad={() => handleLoad()}  
      />
      <ColorsContainer>
        {
          colors.map(color =>{
            var cor = rgbToHex(color[0],color[1],color[2]) 

            return (
              <ColorItem key={cor} cor={cor}/>
            )
          })
        }
      </ColorsContainer>
    </Container>
  );
}

export default Upload;