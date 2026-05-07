# Lab 5 - Starter

Name: Eric Tran
Partner: N/A
GitHub Pages: https://eric-tran6.github.io/Lab5_Starter/

## Check Your Understanding

1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. The "message" feature involves multiple components interacting together making it hard to test. Unit tests are best for self-contained logic. Testing the full message feature would require an integration or an end-to-end test.

1. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. The "max message length" feature is a simple function that is for unit tests. The test just checks whether the input string exceeds 80 characters. This is the kind of self-contained function that unit tests are for.
