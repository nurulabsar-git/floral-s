import React from 'react';

const AddServices = () => {

    return (
        <div className="text-center m-5">
            <form className="bg-red-100 p-10 ">
            <div>
                <input 
                type="text" name="name"
                className="w-96 h-10 mt-2 p-4 border-purple-100" 
                placeholder="Name" 
                required/>
            </div>
            <div>
                <input type="text"
                name="price" 
                className="w-96 h-10 mt-2 p-4" 
                placeholder="Text" required />
            </div>
            <div>
                <input type="text" name="weight" 
                className="w-96 h-10 mt-2 p-4"
                 placeholder="Weight" />
            </div>
            <div>
                <input type="text" name="details"
                 className="w-96 h-10 mt-2 p-4"
                  placeholder="Details" required/>
            </div>
            <div>
                <input type="file" name=""
                 className="w-96 h-10 mt-2 p-2"
                 placeholder="Upload File" />
            </div>
             <input type="submit" value="Submit" class="transition rounded duration-500 ease-in-out bg-blue-600 hover:border-double hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110 w-96 h-10"/>
            </form>
        </div>
    );
};

export default AddServices;