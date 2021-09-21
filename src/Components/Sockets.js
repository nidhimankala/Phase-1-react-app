import React from 'react';
import video1 from './test.mp4';
import axios from 'axios'
import { useState } from 'react'
import ReactPlayer from 'react-player'


function Socket() {

    var video = document.getElementById('videoElement')
    function playVideo() {
        video.play()
      }
      function pauseVideo() {
        video.pause()
      }
      

    return (
    <>

    <div class="centered">
      
      <canvas id="bb_canvas"></canvas>
      <video autoplay controls id="videoElement">
        <source src='https://youtu.be/H98kDD_HbUE' type="video/mp4/" />
      </video>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <img src='https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.1605559903.fit_scale.size_1028x578.png' width = '50%'/>

      <br />
      <hr />
      <button onclick="playVideo()" type="button">Play</button>
      <button onclick="pauseVideo()" type="button">Pause</button><br />
    </div>
    </>
    );
  }
  
  export default Socket;
  