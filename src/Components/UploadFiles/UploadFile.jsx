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
  <div className="text-center p-5 bg-green-100">
      <h2 className='text-center'>Add Vegetables</h2>
     <form onSubmit={handleSubmit(onSubmit)} className="p-10 shadow-md">
        <textarea rows="3" className=" w-96 border rounded border-double border-4 rounded-md p-2" type="text" name="title" {...register("title", {required: true})} placeholder="Title*"/> <br/>
        <textarea rows="8" className="w-96 border rounded border-double border-4 border-light-blue-500 p-2" type="text" name="content" {...register("content", {required: true})} placeholder="Content*"/><br/>
        <input type="file" onChange={handleDataUpload} className="w-96 text-gray-700 px-3 py-2 border rounded"/> <br />
        <input type="submit" className="mt-5 transition rounded duration-500
             ease-in-out bg-blue-600
             hover:border-double
             hover:bg-green-600 transform hover:-translate-y-1
             hover:scale-110 w-96 h-10" />
     </form>
  </div>
    );
};



export default UploadFile;