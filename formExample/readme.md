3. Design and implement a complete user registration form with the following fields:
 
* Full Name
* Email
* Password and Confirm Password
* Gender selection
* Terms and Conditions agreement
 
The form must:
Handle all user input and validation entirely on the client side
Prevent default page reload behavior on submission
Show a summary of submitted values (excluding passwords) after successful submission
 
You are expected to:
Use the <form> element meaningfully with proper method and action attributes
Extract and validate data using the FormData API
 
Build an experience that mimics real-world registration flows, including error handling and dynamic feedback (UI only) (Pure JS)
 

 ////

 ✅ method Attribute
The method attribute defines how form data is sent to the server.

POST – Sends data in the body of the HTTP request (secure for sensitive info like passwords).

GET – Sends data in the URL as query parameters (visible, less secure, used for searches or filters).

💡 In real-world registration forms, we use POST because it:

Hides data from the URL

Supports larger payloads

Is more secure for sending passwords, emails, etc.

 ✅ action Attribute
The action attribute defines where (which URL) the form data will be sent when submitted.

action="#" – Submits to the same page (does nothing if JavaScript is handling submission).

action="/register" – Would submit the form to a /register route on your server.

💡 In our example:

html
Copy code
<form id="registrationForm" method="POST" action="#">