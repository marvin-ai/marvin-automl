# Marvin MongoDb 

## Database Configuration

To user Marvin you will need a MongoDb to run the AutoML tool. 

After install you can point to [marvin-folder]/data and you `mongo` comand.


### Start Mongo CLI
```javascript
mongo
use marvindata
```

### Insert the Login/Pass for adminstration
```javascript
use marvindata
db.usercollection.insert({ "username" : "admin", "pass" : "marvin123" })
```

### Check data
```javascript
db.usercollection.find().pretty()
```