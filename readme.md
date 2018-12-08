## Ticking managing application

Build a ticket managing app, where the user can add, filter, assign, and complete tickets.

- The app should have two screens: the list screen and the details screen. Please use the Angular router to manage the transitions between them.
- Even though we tend to use NgRx for state management, you can use a different approach if you think it fits better.
- Write a couple of tests. The goal here is not to build a production-quality app, so don't test every single detail. Two or three tests should be good enough.
- Don't forget about error handling and race conditions. The API server has a random delay. If you bump it up to say 10 seconds, would the app still work correctly?

Even though the app is small, one can easily spend the whole week working on it: perfecting styles, testing every single method, or carefully crafting every single line of code. PLEASE DON'T! Do as much as you can in about two hours and share the results.

## Starting an App

Run `./start.sh` to launch the API server and the client.

The API server runs on the port 3000, and the app run on the port 4200.

Open it in the browser, and you'll see the tickets and users lists.

## Sharing the application

Push the result of your work to a private github repo and add `vsavkin` as a collaborator.
