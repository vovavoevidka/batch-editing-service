## Batch Editing Service

#### Done:
- project structure
- clustered application
- very basic impl of handler
- attempt to perform request schema validation (but commented)


#### TODO:
- all files are exported function, this if for depencency injection introduction
- configuration
- production build
- edge cases implementation according to business needs


#### Test request:
```
POST /batch HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: cda134c1-71bc-459c-9111-67803f212412

{
"endpoint": {"verb": "PATCH", "url": "https://guesty-user-service.herokuapp.com/user/{userId}"},
"payload": [
{"params": {"userId": 14 }, "body": { "age": 30 }},
{"params": {"userId": 29 }, "body": { "age": 30 }},
{"params": {"userId": 103 }, "body": { "age": 30 }}
]
}
```