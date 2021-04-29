import axios from 'axios';
import './AddBook.css'
import NavBar from '../NavBar/NavBar';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBook = () => {
      const { register, handleSubmit } = useForm();
      const [imageURL, setIMageURL] = useState(null);

      const onSubmit = data => {
            const eventData = {
              id:data.id,
              book: data.book,
              author:data.author,
              price:data.price,
              image: imageURL
            };
            const url = `https://paperbackexchange.herokuapp.com/addProduct`;
            
            fetch(url, {
              method: 'POST', 
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(eventData)
            })
            .then(res => console.log('server side response', res))

            alert('Book Added!')
            window.location.href = "http://localhost:3000";
      };

      const handleImageUpload = event => {
            console.log(event.target.files[0])
            const imageData = new FormData();
            imageData.set('key', '5cefbb444c23d3daef1b910f94e2524d');
            imageData.append('image', event.target.files[0]);
            
            axios.post('https://api.imgbb.com/1/upload', 
            imageData)
            .then(function (response) {
              setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
              console.log(error);
      });

      // const onSubmit = (data) => {
      //       alert(JSON.stringify(data));
      
      };
      
      return (
            <div className='body'>
                  <NavBar />

                  <h2 style={{textAlign: 'center',fontWeight: 'bold',color:'#fdfdfd'}}>Add New Book Here</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                              <label htmlFor="id">Id</label>
                              <input {...register("id")} placeholder="id" />
                        </div>
                        <div>
                              <label htmlFor="book">Book</label>
                              <input {...register("book")} placeholder="book" />
                        </div>

                        <div>
                              <label htmlFor="author">Author</label>
                              <input {...register("author")} placeholder="author" />
                        </div>

                        <div>
                              <label htmlFor="price">Price</label>
                              <input {...register("price")} placeholder="price" />
                        </div>

                        <label for="file-upload" class="">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" class='' onChange={handleImageUpload}/>
                        </label>
                        <input type="submit" />
                  </form>
            </div>
      );
};

export default AddBook;