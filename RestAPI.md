# REST

## Two different C
- user can use any either method for creating data into database

### Method 1
- From terminal to run with json file `Oyinloye_Femi_moped_createStatements.json`

```shell
> cd storage
```
- After entering into storage folder, then enter this line below into terminal 

```shell
> createDatabase.js
```

---
### Method 2

- From terminal to run with sql file `Oyinloye_Femi_moped_createStatement.sql`

```shell
> cd storage
```
- After entering into storage folder, then enter this line below into terminal 

```shell
> ls Oyinloye_Femi_moped_createStatement.sql
```

- Follow by this line below:

```shell
> mysql -u controller -p <Oyinloye_Femi_moped_createStatement.sql
```
- It requested for password enter `secret`
```shell
Enter password: 
```


Get more information about HTTP in [here](https://developer.mozilla.org/en-US/docs/Web/HTTP)


## Methods
Get information about HTTP request method [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

    - Get
    - POST
    - PUT
    - DELETE
    - OPTIONS
    - HEAD
    - PATCH


Get information about HTTP request status [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/status)


## resource 

For example:
```
http://localhost:4000/api/mopeds
```

The GET request is 

```
GET http://localhost:4000/api/mopeds
```
---
### To returns all mopeds as json array
GET /api/mopeds

### For getting the moped with mopedId

For example for getting with mopedId 1
GET /api/mopeds/1

return value
```json
{
    "mopedId": 1,
    "name": "MotoX 2000",
    "modelYear": 2017,
    "rating": "****",
    "topspeed": 10
  },
```
---
### To add or insert a new moped 
POST /api/mopeds

computer is given in body as a json object, Returns a status object

#### Example

```json
{
    "mopedId": 5,
    "name": "Grampa 89",
    "modelYear": 2012,
    "rating": "*",
    "topspeed": 40
  }
```

### To update
PUT /api/mopeds/mopedId
 For example moped with mopedId 5
PUT /api/mopeds/5
```json
{
    "mopedId": 5,
    "name": "Grampa 89",
    "modelYear": 2012,
    "rating": "*",
    "topspeed": 40
}
```
- moped will be given as a json object in body, and returns a status object.
- if the moped with given mopedId doesn't exist, 
it will be created and if the given mopedId in URI does not match the MopedId in the object, it given error that KEYS_DO_NOT_MATCH status.

### To remove or delete the mopeds with id 1

DELETE /api/mopeds/mopedId
for example
DELETE /api/mopeds/1

returns a status object

---
## Usage with fetch

let's assume `cors` situation:

### GET 
```js
const options={
    method:'GET',
    mode:'cors'
}
const data = await fetch(uriValue, options);
const result = data.json();
```

The GET is default, so you can just
```js
const data = await fetch(uriValue, {mode:'cors'});
const result = data.json();
```

#### For example
```js
fetch('http://localhost:4000/api/mopeds', {mode:'cors'})
```
or

```js
fetch('http://localhost:4000/api/mopeds/1', {mode:'cors'})
```
or 
```js
let mopedId =1
fetch(`http://localhost:4000/api/mopeds/${id}`, {mode:'cors'})
```

---
### POST and PUT

```js
const options={
    method:'POST',
    mode:'cors',
    body:JSON.stringify(mopedObject),
    headers:{'content-type':'application/json'}
}
```

```js
const options={
    method:'PUT',
    mode:'cors',
    body:JSON.stringify(mopedObject),
    headers:{'content-type':'application/json'}
}
```
- it needs this for the both cases (POST and PUT)
```js
const data = await fetch(uriValue, options);
const result = await data.json();
```

for example POST:

```js
fetch('http://localhost:4000/api/mopeds', options)
```
mopedObject:
```json
{
    "mopedId": 5,
    "name": "Grampa 89",
    "modelYear": 2012,
    "rating": "*",
    "topspeed": 40
  }
```
for example PUT:

```js
fetch('http://localhost:4000/api/mopeds/1', options)
```
---
### DELETE

```js
const options={
    method:'DELETE',
    mode:'cors'
}
const data = await fetch(uriValue, options);
const result = data.json();
```

for example DELETE:
```js
fetch('http://localhost:4000/api/mopeds/1', options)
```