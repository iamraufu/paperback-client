/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  const {  book, author, price, image } = props.book;

  return (
      
    <>
<div class="flex flex-col" style={{ overflow: 'hidden' }}>
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
              </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
              </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
              </th>
                 
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" style ={{width:'40px'}} src={image} alt="" />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {book}
                        </div>
                        <div class="text-sm text-gray-500">
                          {author}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{book}</div>
                    <div class="text-sm text-gray-500">{author}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-green-800">
                      ${price}
                </span>
                  </td>
                  
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link className="text-indigo-600 hover:text-indigo-900" to="/addbook"><FontAwesomeIcon style={{ cursor: 'pointer' }} title='Add Book' icon={faPlus} /></Link>
                    <Link to="/editbooks" style={{ padding: '15px' }} title='Edit Book'>Edit</Link>
                    <FontAwesomeIcon style={{ cursor: 'pointer' }} title='Delete Book' icon={faTrash} />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>

    

  );
};

export default Dashboard;