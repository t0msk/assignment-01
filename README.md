# 24i coding assignment / React Native teams

Your implementation won't be used in the production but try to imagine it would be. So write exactly as you would when every-day coding. That might mean for example adding a helpful comments for a future reader (or for yourself) here and there.

Don't hesitate to ask if you find this spec missing a detail or something is unclear. Any questions are more than welcome.

## Spec

Write a function which takes a number of seconds as an input and converts it into user-friendly time units. Write comprehensive unit tests. Expect your code to be used in complex applications deployed all over the globe.

### Input and output examples

-   input "284400" must result into output "3 days and 7 hours"
-   input "2700" must result into output "45 minutes"
-   input "47" must result into output "47 seconds"

## Getting started

Before doing anything else make sure you have following dependencies installed on your computer:

```
Node 18.12.1
Yarn 3.3.0
```

Then install npm packages by running `yarn install`.

Avoid installing any new packages or updating current ones. Prefer using your own code instead of using 3rd party libraries. Using jest is acceptable for unit tests of course.

You'll find a placeholder function `convertSecondsToTimeUnits()` in a file **src/index.ts**. Replace this with your implementation.

Tests are located under the folder **src/tests/** and there is already an example test written for you.

## Scripts

There are some helpful scripts for you. Make sure to run them all before submitting and make sure they all pass.

-   `yarn lint` - Run linter for static analysis
-   `yarn typecheck` - Run typescript validation
-   `yarn prettify` - Fix styling of code using prettier
-   `yarn prettify-check` - Check styling of code using prettier
-   `yarn test` - Run unit tests using jest
-   `yarn verify` - Custom verification

## Submitting your code

Open **meta.json**. Replace value of `.candidate` with your full name and value of `.date` with a current date in yyyy-mm-dd format. Leave `.testId` and `.revision` untouched. As an example:

```
{
    "testId": "01",
    "revision": 1,
    "candidate": "John Doe",
    "date": "2022-04-17"
}
```

Make sure all checks (linting, styling, typechecking, unit testing and custom verification) are passing. Then run `yarn zip` to create a zip package located at **zip/assignment-01.zip**. Send this zip package back to us for a review.
