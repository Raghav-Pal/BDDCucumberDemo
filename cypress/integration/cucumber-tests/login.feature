Feature: login test

    Scenario: test login
        Given user is on login page
        When user enters username and password
        And clicks on login butoon
        Then user is navigated to the homepage
