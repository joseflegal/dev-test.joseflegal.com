

# POSTMAN results - 2024-02-05

-  Objects in [dev.json](db/dev.json) are accessed and modified using the following requests:

```
  GET    http://localhost:3000/entities  
```

### dev.json snapshot
![get](<Screenshot 2024-02-05 at 2.16.29 PM.png>)
![dev.json snapshot](<Screenshot 2024-02-05 at 2.16.09 PM.png>)

```
  GET    http://localhost:3000/entities/[id] 
```
![getOne](<Screenshot 2024-02-05 at 2.16.39 PM.png>)

```
  POST   http://localhost:3000/entities  
```
![create](<Screenshot 2024-02-05 at 2.17.00 PM.png>)
![dev.json snapshot](<Screenshot 2024-02-05 at 2.17.17 PM.png>)

```
  PUT    http://localhost:3000/entities/[id] 
```
![update](<Screenshot 2024-02-05 at 2.17.31 PM.png>)
![dev.json snapshot](<Screenshot 2024-02-05 at 2.17.42 PM.png>)

```
  DELETE http://localhost:3000/entities/[id] 
```
![remove](<Screenshot 2024-02-05 at 2.17.56 PM.png>)
![dev.json snapshot](<Screenshot 2024-02-05 at 2.18.03 PM.png>)

### Test uniqueness requirement for entity.id property
![create with existing ID](<Screenshot 2024-02-05 at 2.18.15 PM.png>)

### Details of the incoming request in the json-server terminal

![HTTP Status Codes and processing time](<Screenshot 2024-02-05 at 2.18.27 PM.png>)
