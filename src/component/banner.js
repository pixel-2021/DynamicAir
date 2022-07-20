import React, { Component } from 'react'; 
import { Player } from 'video-react';
import video from '../images/video.mp4';
import { Container, Row} from 'react-bootstrap'; 
 
function banner () {
    return (
        <>   
        <div className='video-tager'>
          
        <Player autoPlay muted loop>
        <source src={video} />
      </Player>
       
      <div className='banner-liner'>
        <Container>
          <Row>
          <h1>Excellence In 
          <span>Sheet Metal </span>
          <span>Fabrication</span>
          </h1> 
          </Row>
        </Container>
      
        </div>
      </div>
      </>
    );
}
 
export default banner; 