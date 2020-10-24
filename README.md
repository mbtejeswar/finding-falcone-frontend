This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Finding Falcone

### Live Project
https://findingfalconeapp.netlify.app/

### Deployment and Execution 
    1.  You should have the following prerequisites:
    - NodeJS 14.12.0 (Any other recent versions should also work fine);

    2. Install dependencies with one of the following commands
    - `npm install` Installs all dependencies

    3. To run the App use:
        - `$ npm start` Runs the app in the development mode.<br />
        -  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.    

    4. Run Unit Tests with the following command 
        - `npm test` Runs Unit Tests

    5. To build the app for production 
        - Builds the app for production to the `build` folder.<br />


### Pages Available 
    Finding Falcone Controls page - http://localhost:3000/
    Finding Falcone Result page   - http://localhost:3000/result


### Directory Layout 


├── /node_modules/              # 3rd-party libraries and utilities                                                                             
├── /public/                    # Static files which are copied into the /build/public folder                                                   
├── /src/                       # The source code of the application                                                                            
│   ├── /api/                   # Contains API client and axios instance for API calls                                                          
│   ├── /components/            # React components                                                                                              
│   ├── /containers/            # Contains component containers                                                                                 
│   ├── /hoc/                   # Higher Order Components                                                                                       
│   ├── /store/                 # Contains all Redux related functions                                                                          
│   ├── /utils/                 # Contains reusable utilities                                                                                   
│   ├── /App.js                 # Wraps all container and components startup script                                                             
│   ├── /App.css                # CSS style sheet for App                                                                                       
│   ├── /app.test.js            # Unit test for App.js                                                                                          
│   ├── /Index.js               # Startup script                                                                                                
├── package.json                # The list of dependencies and utilities