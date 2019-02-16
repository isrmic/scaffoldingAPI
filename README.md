# scaffoldingAPI
This project was created with the intention of facilitating the creation of API's using technologies like GraphQL with ApolloServer.

Projetos projects used:
  - [Apollo Server](https://github.com/apollographql/apollo-server)
  - [GraphQl](https://github.com/graphql/graphql-js)

# First steps


Download the repository for your machine:

- ```git clone https: // github.com / isrmic / scaffoldingAPI```
- ```cd scaffoldingAPI```
- ```npm install```
- ```npm run start```

After performing these steps the server should be ready to run at http: // localhost: 3000 /.

At first the playground is enabled but can be disabled later.

# Defining schemas
All schemas will remain inside the "schemas" folder having the separation of the files for definition of types and queries in Query.gql and types and mutations in Mutation.gql.

# Defining resolvers
In this project so that everything is organized are made some separations regarding the location of each file, for example we have the resolvers (Query, Mutation, Default Resolver) that are separated by folders and identified by the filename according to what was defined in the schematic.

Example:
// schema/Query.gql
```graphql
#query example
type Query {
    example: [Example]
}
```
// resolvers/Query/example.js
```javascript
const example = () => async (root, args, context, info) => {
	const data = [
		{
			field1: 'this is a field1',
			field2: 'this is a field2',
		},
		{
			field1: 'this is a field1 of object 2',
			field2: 'this is a field2 of object 2',
		}
	];

	return data;
};

module.exports = example;
```
The "example.js" file located in "resolvers / Query / example.js" will automatically be understood as resolving to the "example" query defined in the schema.

Resolvers have this pattern in their writing:
```javascript
const test = () => async (root, args, context, info) => {
    //definition of resolver
};

module.exports = test;
```
A function that returns another asynchronous or synchronous function (function, arow function) is exported, and this function that is returned by the test function is the resolver that will return the data as requested.
NOTE: this will work for both querys and mutations, the difference is even in the organization by the separation of the files.

Resolvers can also be created from a simple command

# Tests
You can do a test of how everything works before even starting the server for tests in the playground, if you want to test the example already you can execute the following command:
```
npm run test
```
This way it will display the results returned by resolving example.js.
```
Result:

 { example:
   [ { field1: 'this is a field1',
       field2: 'this is a field2',
       field3: 'this is a field 3' },
     { field1: 'this is a field1 of object 2',
       field2: 'this is a field2 of object 2',
       field3: 'this is a field 3' } ] }
```

If you want to take advantage of the features of graphql as a selection of fields and subfields you can pass a string next to the test command that would be the query made to the API.
```
npm run test "{ example { field1 field2 } }"
```
You should receive a result similar to this:
```
Result:

 { example:
   [ { field1: 'this is a field1', field2: 'this is a field2' },
     { field1: 'this is a field1 of object 2',
       field2: 'this is a field2 of object 2' } ] }
```