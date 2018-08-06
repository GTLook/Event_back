# Event Backend

Event is a project focused at time data visualization.  This is the back end server side of the project.

The front can be found at

This end of the project is deployed on heroku.

Please see the front end of the project at  to use the project.

## Deployment

Add additional notes about how to deploy this on a live system

fork and clone the project and the front end:

* run: npm install
* run: createdb (db name)
* run: npm run knex migrate:latest
* run: npm run knex seed:run
  - only if you want the seeded data
* update the db name in the knexfile.js
  - on the backend
* run: npm run dev
  - remember to update the frontend ./src/helper to listen for local port 5000

## Built With

* [JavaScript](https://www.javascript.com/) - The language
* [Materialize](https://materializecss.com/) - The css framework used
* [React](https://reactjs.org/) - Frontend library
* [Redux](https://redux.js.org/) - State container
* [postgreSQL](https://www.postgresql.org/) - database
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Node](https://nodejs.org/en/) - Package ecosystem

## Contributing

Please send me a message prior to sumbitting a pull request.


## Authors

* **Gavin Look** - *Initial work* - [GTLook](https://github.com/GTLook)

## License

This project is licensed under the MIT License

## Acknowledgments

* Inspiration
