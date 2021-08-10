import React, { useState } from 'react';
// import swal from 'sweetalert'

const AddServices = () => {
 const [addServices, setAddServices] = useState({})
 const [imgFile, setImgFile] = useState(null);
 const handleBlur = (event) => {
     console.log(event.target.value);
     const newService = {...addServices}
     newService[event.target.name] = event.target.value;
     setAddServices(newService);
    
 }

 const handleFile = (e) => {
    //  console.log(event.target.file[0]);
    const newImage = e.target.files[0];
     setImgFile(newImage)
 }

   const handleSubmit = (event) => {
    
     const formData = new FormData();
     formData.append('name', addServices.name)
     formData.append('image', imgFile)
     formData.append('details', addServices.details)
     formData.append('weight', addServices.weight)
     formData.append('price', addServices.price)
   
    fetch("http://localhost:5000/addItem", {
        method: "POST",
        body: formData,
    })
   .then(result => result.json())
   .then(data => {
       if(data){
        alert("Successfully done!");
        console.log(data)
        event.target.reset();
       }
   })

   .catch(error => console.log(error))

   }

    return (
        <div className="text-center m-5">
            <form onSubmit={handleSubmit} className="bg-red-100 p-10 ">
            <div>
                <input 
                type="text" name="name" onBlur={handleBlur}
                className="w-96 h-10 mt-2 p-4 border-double" 
                placeholder="Name" 
                required/>
            </div>
            <div>
                <input type="text"onBlur={handleBlur}
                name="price" 
                className="w-96 h-10 mt-2 p-4" 
                placeholder="Price" required />
            </div>
            <div>
                <input type="text" name="weight" onBlur={handleBlur}
                className="w-96 h-10 mt-2 p-4"
                 placeholder="Weight" />
            </div>
            <div>
                <input type="text" name="details" onBlur={handleBlur}
                 className="w-96 h-10 mt-2 p-4"
                  placeholder="Details" required/>
            </div>
            <div>
                <input type="file" onChange={handleFile} name=""
                 className="w-96 h-10 mt-2 p-2"
                 placeholder="Upload File" />
            </div>
             <input type="submit" value="Submit"
              className="mt-5 transition rounded duration-500
             ease-in-out bg-blue-600
             hover:border-double
             hover:bg-green-600 transform hover:-translate-y-1
             hover:scale-110 w-96 h-10"/>
            </form>
        </div>
    );
};

export default AddServices;