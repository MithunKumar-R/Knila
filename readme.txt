Form to Store Contact Details:

- Is an React JS application used to get, show, edit and sort contact details that are recieved from the user.

External Libraries Used:

- Bootstrap.
- react-redux.
- @reduxjs/toolkit.
- react-router-dom.
- google-map-react.
- formik
- yup
- @fortawesome/react-fontawesome.

Summary :

- The application consists of a header, content and a footer all designed using bootstrap.
- The header has two anchor tags for navigation which is used to redirect between the two pages of content i.e Home and add contact page.
- The content page consists of two pages home and a page to add contact.
- Home page is used to display the added contacts for the user to view in a table format using bootstrap and edit if neccessary when edit button is clicked the page is redirected to the add contact page 
where the id of the object is passed through query string and retrieved using react-router-dom (useSearchParams).
- the add contact page consists of a form created using formik and yup (for form validation) which consists of input fields that were mentioned in the task
i.e {
	public string FirstName
	public string LastName
	public string Email 
	public string PhoneNumber
	public string Address
	public string City
	public string State
	public string Country
	public string PostalCode
	
}

- the state is managed using react-redux and @reduxjs/toolkit when submitting or updating a form.
- as the state is stored in the localstorage a middleware is created so that when a submit or update action is called and reducer is executed that middleware moves the state into localstorage.
- for retrieving localstorage data a preloadedState is declared where the state updated in localstorage is retrieved and updated to the state array.
- for map view google-map-react is used and as the values require coordinates i have statically given 3 values for display.

Conclusion:

- for testing purpose there are 4 static values added in redux store's inital state so that there will be some data.

Thanks and Regards,
Mithun Kumar. R