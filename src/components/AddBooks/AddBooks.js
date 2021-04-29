import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NavBar from '../NavBar/NavBar';

const AddBooks = () => {
      // eslint-disable-next-line
      const { register, handleSubmit, watch, errors } = useForm();
      const [imageURL, setIMageURL] = useState(null);

      const onSubmit = data => {
            const eventData = {
                  name: data.name,
                  imageURL: imageURL
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

      }


      return (

            <div>
                  <NavBar />

                  <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: '#492540' }}>Admin Dashboard</h1>

                  <div>
                        <div class="md:grid md:grid-cols-3 md:gap-6">
                              <div class="md:col-span-1">
                                    <div class="px-4 sm:px-0">
                                          <h3 class="text-lg font-medium leading-6 text-gray-900">Add Books</h3>
                                          <p class="mt-1 text-sm text-gray-600">
                                                This information will be displayed publicly so be careful what you share.
                                          </p>
                                    </div>
                              </div>

                              <div class="mt-5 md:mt-0 md:col-span-2">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                          <div class="shadow sm:rounded-md sm:overflow-hidden">
                                                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

                                                      <div>

                                                            <div class="grid grid-cols-6 gap-6">
                                                                  <div class="col-span-6 sm:col-span-3">
                                                                        <label for="id" class="block text-sm font-medium text-gray-700">Id</label>
                                                                        <input type="text" name="id" defaultValue='Enter Id here' id="id" autocomplete="off" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ outline: 'none' }} ref={register} />
                                                                  </div>

                                                                  <br />

                                                                  <div class="col-span-6 sm:col-span-3">
                                                                        <label for="book" class="block text-sm font-medium text-gray-700">Book Name</label>
                                                                        <input type="text" name="book" defaultValue='Enter Book name here' id="book" autocomplete="off" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ outline: 'none' }} ref={register} />
                                                                  </div>

                                                                  <div class="col-span-6 sm:col-span-3">
                                                                        <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
                                                                        <input type="text" name="author" defaultValue='Enter Name of the Author here' id="author" autocomplete="off" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ outline: 'none' }} ref={register} />
                                                                  </div>

                                                                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                                                                        <input type="text" name="price" defaultValue='Price goes here' id="price" autocomplete="off" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ outline: 'none' }} ref={register} />
                                                                  </div>

                                                            </div>

                                                      </div>



                                                      <div>
                                                            <label class="block text-sm font-medium text-gray-700">
                                                                  Cover photo
                                                      </label>

                                                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                                  <div class="space-y-1 text-center">
                                                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                        <div class="flex text-sm text-gray-600">

                                                                              <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                                    <span>Upload a file</span>
                                                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" onChange={handleImageUpload} required />
                                                                              </label>

                                                                        </div>
                                                                        <p class="text-xs text-gray-500">
                                                                              PNG, JPG, GIF up to 10MB
                                                                  </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                            <input type="submit" name="price" id="postal_code" autocomplete="off" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{ outline: 'none' }} />
                                                      </div>
                                                </div>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>

                  <div class="hidden sm:block" aria-hidden="true">
                        <div class="py-5">
                              <div class="border-t border-gray-200"></div>
                        </div>
                  </div>

            </div>
      );
};

export default AddBooks;