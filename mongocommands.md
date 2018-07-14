# Marvin MongoDb Database configuration

## Mongo Db Commands to start with Marvin
```javascript
use marvindata
db.usercollection.insert({ "username" : "admin", "pass" : "marvin123" })
```

## Check data
```javascript
db.usercollection.find().pretty()
```