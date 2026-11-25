
//API testing using playwright framework:

/*

Use below url for the api testing ::
https://reqres.in/

Generate an API key from the above url and use it in the code for the api testing.

API testing:: it is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.

different types of methods used in the API testing are ::
 GET method , POST method , PUT method , DELETE method , PATCH method.

 Get method :: it is used to retrieve data from the server.
 Post method :: it is used to send data to the server to create a new resource.
 Put method :: it is used to update an existing resource on the server.
 Delete method :: it is used to delete a resource from the server.
 Patch method :: it is used for updating a resource on the server. It is similar to the PUT method, but it only updates the specified fields of a resource, rather than replacing the entire resource.

 Different types of status codes used in the API testing are ::
 200 OK :: The request has succeeded.
 201 Created :: The request has been fulfilled and has resulted in one or more new resources being created. 
 400 Bad Request :: The server could not understand the request due to invalid syntax.
 401 Unauthorized :: The client must authenticate itself to get the requested response.
 403 Forbidden :: The client does not have access rights to the content.
 404 Not Found :: The server can not find the requested resource.
 500 Internal Server Error :: The server has encountered a situation it doesn't know how to handle.

 different url to be used for the api testing are ::
for get: https://reqres.in/api/users?page=2
for post: https://reqres.in/api/users
for put : https://reqres.in/api/users/2
for delete : https://reqres.in/api/users/2
for patch : https://reqres.in/api/users/2


*/

import {test,expect} from '@playwright/test';

const API_KEY = 'free_user_3JuCXig0fawkF4UVM8JZrisWuRZ'; // Replace with your actual API key

test('get response', async({request})=>{
  
  const response = await request.get('https://reqres.in/api/users?page=2', {
        headers: {
          'x-api-key':API_KEY   //authotication related details to be passed in the header for the api testing.
        }
  }
  )
  expect(response.status()).toBe(200);
  const jsonData = await response.json();
  console.log(jsonData);

})

//post - send data to the server to create a new resource
test('post response', async({request})=>{
  
  const response = await request.post('https://reqres.in/api/users', {
        headers: {
          'x-api-key':API_KEY  
          //along with the header we need to pass the body in the post method to create a new resource on the server.
        },
        data: {
          "name": "morpheus",
          "job": "leader"
        }
  } )
 
  console.log('Status code:', response.status());
  console.log(await response.json()); 
  expect(response.status()).toBe(201); //201 is the status code for the post method.

})

//put -update value 
test('put response', async({request})=>{
  const response = await request.put('https://reqres.in/api/users/2', {
        headers: {
          'x-api-key':API_KEY  
        },
        data: {
          "name": "morpheus",
          "job": "QA LEAD"
        }
  } )
   
  const bodyResponse = await response.json();
  console.log('Status code:', response.status());
  console.log('Response body:', bodyResponse);


})

//delete - delete a resource from the server
test('delete response', async({request})=>{
  const response = await request.delete('https://reqres.in/api/users/2', {
        headers: {
          'x-api-key':API_KEY  
        }
  } )
   console.log('Status code:', response.status());
   expect (response.status()).toBe(204); //204 is the status code for the delete method.

})

//patch - update a part of a resource on the server
test('patch response', async({request})=>{
  const response = await request.patch('https://reqres.in/api/users/2', {
        headers: {
          'x-api-key':API_KEY
        },
        data: {
          "job": "QA LEAD"
        }
  } )

  const bodyResponse = await response.json();
  console.log('Status code:', response.status());
  console.log('Response body:', bodyResponse);
  expect(response.status()).toBe(200);
  expect(bodyResponse.job).toBe('QA LEAD');
})