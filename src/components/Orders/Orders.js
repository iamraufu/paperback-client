import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { UserContext } from '../../App';

const Orders = () => {

      // eslint-disable-next-line
      const [loggedInUser,setLoggedInUser]  = useContext(UserContext);
      const [orders, setOrders] = useState([]);
      

      useEffect(() => {
            fetch(`https://paperbackexchange.herokuapp.com/bookings?email=`+ loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                  setOrders(data);
              })
        }, [loggedInUser.email])

      return (
            <div>
                  <NavBar />
            {  orders.length===0?
            <h2 style={{textAlign: 'center',fontWeight: 'bold'}}>You have no orders</h2> : orders.map(order => 
            
                  
                  
                  <div class="flex flex-col" style={{width:'99vw',paddingLeft:'15px', overflow: 'hidden'}}>
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
                                                                  Details
                                                            </th>
                                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                  Order Status
                                                            </th>
                                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                  Price
                                                            </th>
                                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                  Date
                                                            </th>
                                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                  Time
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
                                                                              <img class="h-10 w-10 rounded-full" src={order.photo} alt="" />
                                                                        </div>
                                                                        <div class="ml-4">
                                                                              <div class="text-sm font-medium text-gray-900">
                                                                                 {order.name}
                                                                              </div>
                                                                              <div class="text-sm text-gray-500">
                                                                                 {order.email}
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                  <div class="text-sm text-gray-900">{order.books.book}</div>
                                                                  <div class="text-sm text-gray-500">{order.books.author}</div>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                        Active
                                                                   </span>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                  $ {order.books.price}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                 
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                  
                                                            </td>
                                                            
                                                      </tr>

                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  </div>
                  )}
                 
                        
                        
                
                 

            </div>
      );
};

export default Orders;