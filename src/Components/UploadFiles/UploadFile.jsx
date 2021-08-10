import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const UploadFile = () => {

    const[addImage, setAddImage] = useState(null);
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data, e) =>{
      e.target.reset();
      const eventData = {
          title: data.title,
          content: data.content,
          image: addImage
      };

  
      const url = `https://shrouded-escarpment-21521.herokuapp.com/post`;
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(eventData)
      })
      .then(res => console.log("My server response"))
  
    }
  
    const handleDataUpload = event => {
      const imgData = new FormData();
      imgData.set('key','6c7f482a15154fb8dcecca03f4f610dd');
      imgData.append('image', event.target.files[0]);
  
      axios.post("https://api.imgbb.com/1/upload", imgData)
      .then(function(response){
          console.log(response.data.data.display_url);
          setAddImage(response.data.data.display_url);
      })
      .catch(function(error){
          console.log(error)
      });
  }
  
    return (
  <div>
     <form onSubmit={handleSubmit(onSubmit)} className="d-grid text-center mt-28">
        <textarea className=" w-96 border rounded border-double border-4 rounded-md" type="text" name="title" {...register("title", {required: true})} placeholder="Title*"/> <br/>
        <textarea className="w-96 border rounded border-double border-4 border-light-blue-500" type="text" name="content" {...register("content", {required: true})} placeholder="Content*"/><br/>
        <input type="file" onChange={handleDataUpload}/>
        <input type="submit" />
     </form>
  </div>
    );
};



export default UploadFile;