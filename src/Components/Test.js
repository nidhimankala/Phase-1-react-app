import React from 'react';
import './App.css';

function Test() {
    const [stream, setStream] = useState()
  
    async function uploadFile() {
      const formData = new FormData()
      formData.append('stream', stream[0])
      axios
        .post('http://www.mrexy.com/detectFace', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response)
        })
    }
  
    async function handleSubmit(e) {
      e.preventDefault()
      console.log('here')
      let res = await uploadFile()
      console.log(res)
    }
}

export default Test;
