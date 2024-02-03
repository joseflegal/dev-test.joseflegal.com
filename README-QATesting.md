# API QA TESTING REPORT

This screenshot shows that all tests have passed

![Alt text](<Screenshot 2024-02-01 at 11.18.50.png>)

The test compromises on automatically filling up the form and submitting it. I have added a message that will display when form is submitted successfully to allow for testing to detect the success of the test.

For best testing results :-

navigate to the root directory of the project and run the following the command

 npx cypress run

 The terminal will show the tests running and display the results of the tests. Cypress will also create a video showing the process of the test running and display the results of the test. 

 Test video will be available under tests/e2e/videos

 For the future, we might add automation testing using Selenium framework as it allows testing on different browsers and different frameworks. Selenium will also benefit wide scale testing of several webpages at once allowing for a full website testing with different use cases which will aid in flushing out bugs early in the testing phase to ensure web pages adhere to strong quality control. Cypress is limited to testing javascript while selenium can be tested on several programming languages such Java, Python and C#.