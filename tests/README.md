## Tests folder structure
```
    e2e - folder containing End-To-End Tests for the frontend task, a Postman Collection for the backend task and a Lighthouse audit
    pom - Page Object Model Folder
            locators - folder containing Web Elements Locators from different pages
            pages - folder containing classes for each page e.g - QAForm, RulesEngine, VueLayout, DesignSystem. Each page has methods that interact with specific elements of the page
    conftest.py - file containing test fixtures
```

## Framework documentation
- Programming Language - python
- Design Pattern - Page Object Model
- Test Runner - pytest
- Browser automation - playwright
- Formatting - yapf (default style - pep8)
- Sorting imports - isort
- Future improvements: use a library for reporting, use a library to manage test data, Dockerfile - containerization, Jenkins

## Getting the project running
- Backend Task: get the API collection from tests/e2e/JosefLegal.postman_collection.json and import it in Postman. After the collection is successfully imported, open a New Runner Tab, select the collection and run it. 
- FrontEnd Task: Pre-Requisite - python installed

```bash

# Clone the repo
git clone https://github.com/...

# Install dependencies
pip install -r requirements.txt
playwright install

# Run tests
pytest tests

```
- Lighthouse audit: tests/e2e/Lighthouse Audit.docx

## Scripts

| Script                              | Description                                 |
|-------------------------------------|---------------------------------------------|
| `pytest tests`                      | Run your end-to-end tests                   |
| `yapf --in-place --recursive tests` | Formats your code, default style pep8       |
| `isort tests`                       | Sorts your imports alphabetically           |
| `flake8 tests`                      | Shows errors and warnings that violate pep8 | 


## Bugs and improvements suggestions:
```
Backend: User should be able to send multiple entities at once
    POST http://localhost:3000/entities/
            [
                {
                    "id": 10,
                    "string": "2.3" 
                },
                {
                    "float": 2.3,
                    "boolean": true,
                    "array": [1, "Ana", false],
                    "json": {"1": "one", "2": "two"}
                }
            ]
    Expected Behavior:  
        Entity with id 10 should be created  
                {
                    "id": 10,
                    "string": "2.3" 
                }
        Entity with id 11 should be created
                 {
                    "id": 11,
                    "float": 2.3,
                    "boolean": true,
                    "array": [1, "Ana", false],
                    "json": {"1": "one", "2": "two"}
                }
        Response
                [
                    {
                        "id": 10,
                        "string": "2.3" 
                    },
                    {   
                        "id": 11
                        "float": 2.3,
                        "boolean": true,
                        "array": [1, "Ana", false],
                        "json": {"1": "one", "2": "two"}
                    }
                ]
    Actual Behavior:
        Only one entity is created with id = MAX(ids) + 1. Moreover, id is not present in the response body of the POST request
        Response:   
                [
                    {
                        "id": 10,
                        "string": "2.3" 
                    },
                    {
                        "float": 2.3,
                        "boolean": true,
                        "array": [1, "Ana", false],
                        "json": {"1": "one", "2": "two"}
                    }
                ]
    FrontEnd: User should not be able to introduce ages like -10, 200 - an error message should appear. User should not 
    be able to introduce phone number like "alosihxoa", "0" - an error message should appear.
``` 
