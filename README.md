# Project to create Moped storage into database

## Check for Moped RestAPI 
- you can see the RestAPI for the mopeds [here](/RestAPI.md)

## Installation 

### steps to follow in the installation

1. Write `npm install` on your terminal and press enter (to allow the installation of a packages and it's dependencies to your local node-module folder )
2. Write `node indexSPA.js` on your terminal and press enter (to start the `localhost:3000` )
3. Write `node indexRest.js` on your terminal and press enter (to start the <span style="color:blue">**`localhost:4000`** </span>

    - <span style="color:blue">**`localhost:4000`** </span> start the database API at backend and  
    - <span style="color:blue">**`localhost:3000`** </span>allow you to view the user interface of the API.
4. Write `localhost:3000` on your browser, then follow the procedures in the UI check the image bellow.

![UI](/img/Front.png)


### Steps for manual installations 

```shell 
> npm init -y 
```
```shell 
> npm install mariadb
```
```shell 
> npm install express
```
```shell 
> npm install cors
```
```shell
npm install node-fetch@2
```

## Front Page

- The front page described how the users could navigate to any steps, whereby the user can see all items in the database, get a single item, add to the item in the database, update particular or remove the item in the database.

![UI](/img/Front.png)

---
## All mopeds in the database

- From the front page, when the user clicks on to <span style="color:blue">`get all mopeds`</span>, the current mopeds in the storage appear. Also, when the user clicks on the menu button, it navigates back to the front page.

![All-screenshot](/img/All.png)

---
## Getting a particular moped in the database

- From the front page, when the user clicks on <span style="color:blue">`Get one moped`</span> another page appear where the user can write MopedId or select MopedId to fetch the moped in the database. By clicking on submit button, the actual information in the database concerning the selected mopedId appeared. 

![gettingOne-screenshot](/img/GettingOne.png)

- Result for fetching mopedId 1 from submit button, and by clicking on the menu button, it navigates back to the front page

![GettingOneResult-screenshot](/img/GettingOneResult.png)

---

## Adding new moped to the database

- From the front page, when the user clicks on <span style="color:blue">`Add new moped`</span>, another page appear, then the user can write all the necessary information and post it to the database. By clicking on submit button, the data goes direct to the database. 

![Add-screenshot](/img/Add.png)

- Also, if mopedId exit in the database, message appeared that `Resource was not inserted `

![NotAdd-screenshot](/img/NotAdd.png)

- By changing the mopedId and click submit button, it added the information to the database, then message appeared that 
<span style="color:green">`Resource with mopedId 8 was inserted`</span> 

![NewAdded-screenshot](/img/NewAdded.png)

---


## Removing moped from database

- From the front page, when the user clicks on <span style="color:blue">`remove moped` </span> another page appears, then the user can search with moped with mopedId that needs to be removed or deleted in the database.

![remove-screenshot](/img/Remove.png)

- The result from removing mopedId 8, and status display <span style="color:green">`Resource with mopedId 8 was removed` </span>, and if it does not, the error status `does not removed` display, and by clicking on the menu button, it navigates back to the front page. 

![RemoveResult-screenshot](/img/RemoveResult.png)

---

## updating a moped from databases

- From the front page, when the user clicks on `update moped`, another page appears, then the user can search with the MopedId of the moped in the database that needs to be updated.

### For Example moped with mopedId 11

![Add-screenshot](/img/Update.png)

- The search result from  `mopedId 11` ready for updating

![Add-screenshot](/img/UpdateSubmit.png)

- The result from submit button can display status  `Resource with mopedId 11 was updated`, or `No resource found with mopedId __`, and by clicking on the menu button, it navigates back to the front page.

![Add-screenshot](/img/UpdateResult.png)

---