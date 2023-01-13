# Backend-BudgetApp
backend deploy 
https://budget-app-deploy-backend.onrender.com
# of

# Full Stack Budgeting App

Create a backend API using Express that performs full CRUD on a single model, `transactions`. Then, using RESTful routes, connect it to a React app.

- Follow the instructions and User Stories to meet the criteria for this project. Use Images in these instructions as a reference only.
- Use Express to build a back-end.
- Use `create-react-app` to build a front-end.
- Connect the back-end and the front-end.
- Deploy both apps so anyone can see them online.

#### Back-end

For the back-end to be complete, the following must be true:

- The application uses `express`, `dotenv`, `cors`.
- The application is deployed and can be accessed from your React front-end app and Postman.
- The application has the following routes and work as described below.
- The application handles common errors and has any necessary validations

|  #  | Action  |        URL        | HTTP Verb |    CRUD    |                  Description                   |
| :-: | :-----: | :---------------: | :-------: | :--------: | :--------------------------------------------: |
|  1  |  Index  |   /transactions   |    GET    |  **R**ead  |   Get a list (or index) of all transactions    |
|  2  |  Show   | /transactions/:id |    GET    |  **R**ead  | Get an individual view (show one transactions) |
|  3  | Create  |   /transactions   |   POST    | **C**reate |           Create a new transactions            |
|  4  | Destroy | /transactions/:id |  DELETE   | **D**elete |             Delete a transactions              |
|  5  | Update  | /transactions/:id |    PUT    | **U**pdate |             Update a transactions              |

> **Note:** All of the above routes should work both with an application like Postman and a front-end framework like React

**Model**

- There will be one model with at least these components
- `item_name`- string - the name of the transaction (ie: income, savings, cat food, etc.)
- `amount` -number - the amount of the transaction
- `date`- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
- `from` - string - who this transacton was with (ie. employer, bank, pet store, grocery store, etc)
- `category` - string - what category does this fall into (income, savings, pets, food, etc) - bonus, make this an options list on the new/edit forms.

#### Front-End

For the front-end to be complete, the following must be true:

1. The application is deployed.
1. The navigation bar allows the user to switch between the "Index" and "New" pages. Bonus: shows amount total.
1. The following is present on the "Index" page:

   - The navigation bar.
   - A list of transactions that have the following properties visible:
     - `date` - a string, in any format.
     - `name` - a string, representing the name of the transactions.
     - `amount` - a number, representing the amount of the expenditure/income.
     - The bank account total somewhere near the top.
     - The bank account CSS changes depending on the amount in the bank account

1. The following is present on the "New" page:

   - The navigation bar.
   - The url will be `/transactions/new`.
   - The form to create new transactions, which has four fields.
     - `date` - a string, in any format.
     - `name` - a string, the name of the transactions.
     - `amount` - a number, the amount of the expenditure/income.
     - `from` - a string, where this expense/income has come from.
     - `category` - a string. As a bonus, this can be an options menu.

1. The following is present on the "Show" page

   - `date` - a string, in any format.
   - `name` - a string, the name of the transactions.
   - `amount` - a number, the amount of the expenditure/income.
   - `from` - a string, where this expense/income has come from.
   - `category` - a string`

1. The following is present on the "Edit" page
   - The navigation bar.
   - The url will be `/transactions/new`.
   - The form to create new transactions, which has four fields.
     - `date` - a string, in any format.
     - `name` - a string, the name of the transactions.
     - `amount` - a number, the amount of the expenditure/income.
     - `from` - a string, where this expense/income has come from.
     - `category` - a string. As a bonus, this can be an options menu.

## Bonus Ideas:

- Change favicon from default react app.
- Add some logic/functionality that will make income a positive number and an expenditure a negative number, rather than having the user type it in.
- Use [react-bootstrap](https://react-bootstrap.github.io) or a similar CSS framework to help style your app.
- Show the amount in the nav bar, so it is visible on every view.
- Use the date object for the date, instead of just a string.
- Use the input type `date` for the date.
- Add a library like [chartjs](https://www.chartjs.org) or [D3](https://www.chartjs.org) to provide visualizations the budget app.

Be sure to confirm with your instructor which bonus idea you will implement.
