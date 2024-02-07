# Josef coding challenge


### QA Test(QA.vue)

1. **API testing:** 
Using postman, tested below API Endpoints works well and confirm the uniqueness of id.
You can check the screenshots in QATestResult folder of this project.

```
  GET    http://localhost:3000/entities  
  GET    http://localhost:3000/entities/[id] 
  POST   http://localhost:3000/entities  
  PUT    http://localhost:3000/entities/[id] 
  DELETE http://localhost:3000/entities/[id] 
```

2. **e2e frontend testing:**

Using cypress, tested frontend functionality.

instruction:
- npm install cypress --save
- npx cypress open
- select form_submission_spec.js

3. **Extra credit:** 
Using Lighthouse, run an audit of the QA page and document your performance and acesebility findings.

instruction:
- npm install -g lighthouse
- lighthose http://localhost:9001/#/qa --output-path=D:\

After run the above command you can find the report.html file in the output path. You can change this path.
