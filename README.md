# yourhomefront_yourhome
Yourhome project built with angular 5 and Django rest framework


<p>This is a business apartment booking project.</p>
Two kind of Users:
<ul>
<li>A User may want to upload his apartment for rent to other users</li>
<li>or maybe he want to rent an apartment. </li>
</ul>

The user that is interested in renting an apartment:
<ul>
<li>He can see all the uploaded apartments</li>
<li>He can search the uploaded apartments</li>
<li>He can review an existing apartment after he log in</li>
<li>He may ask more information about an apartment and its availability.</li>
</ul>

The apartment owner <b>should only register his apartment</b>.

<p> Our team will be responsible for the daily communication about the apartments with customers and no further action is required from the owner</p>

<i> The website works perfectly at development mode but on the VM I get an error 500 so it is not working</i>
<p><b>How to see the app</b>
<ol>
  <li>Download the repository on local pc</li>
  <li>In client catalogue in cmd press "ng build"</li>
  <li>Move to the server catalogue and in cmd press "python manage.py runserver"</li>
</ol>
</p>

First Case: See the uploaded apartments

When we enter in the website we can see the home page (Dashboard) where you can see the last 4 apartments uploaded and also navigate to the /apartments if you press the button "view more listings". In the apartments page you can see all the uploaded apartments from all the users.

Second Case: Search an Apartmnet

When we press at the navigation bar the apartments we are redirected to the /apartments where we can see all the uploaded apartments. There you can enter a specific word that describes the apartments of your interest. The available results are displayed immediately.

Third Case: See details about a specific apartment

From the home page or Apartments page you can search and choose a specific apartment. Then apartment photo, details and reviews are displayed about it. In order to ask more information about the apartment or comment the apartment we have to log in first and the Log in message appears if we try the specific actions.

Fourth Case: Review an apartment.

We select the "log in / register" option from the navigation bar. First if we haven't already register we have to register by providing our preferred username and password. The server checks if the username already exists, if any field was empty during the submition of the form and returns a message to the user. If the credentials provided were successfully passed to the server then the user will automatically log in the app and he should not complete again his username and password*. After the log in the user selects an apartment fromt the Apartments page where he can review the app and see the reviews of other users.

* The screen divides into two parts where at the left side we can log in and at the right part we can register in the app. After the registration or the log in the user is automatically redirected in the home page.

Fifth Case: Ask for more info about the Apartment.

After user log in the user selects an apartment and a form is displayed which he should complete if he want more info and the yourhome team will contact him afterwards.

Sixth Case: Upload an apartment.

If the user try to access the upload page without being logged in then he can only see a message that redirects him to the log in page if he select it. After log in / registration the user chooses the upload page and a form is displayed where all the fields are required and the form submition is disabled until the completion of all the fields. The app checks if the fields where properly completed with unique title and then it adds an apartment in the server. Which the user can see from the Apartments page and select it in order to see the uploaded image and details/

Seventh Case: Delete an apartment.

If the user is logged in, he select the Apartments page. The server provides all the apartments and checks if the user has provided any apartment. If yes, then a deletion button is displayed with the apartment short description.

Eighth Case: Log in and Log out checks.

If the user log in then in the navigation bar the "log in / register" link becomes a log out link. If the user select the log out link it immediately calls the logout() method which logs the user out. But also if the user is logged in and press in the url /login then he can see the logout page with a button where he can press it in order to log out.

That's all!
