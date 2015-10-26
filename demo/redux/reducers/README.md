# Reducers

Actions describe the fact that _something happened_, but don’t specify **how the application’s state changes** in response. This is the job of a reducer.

In Redux, all application state is stored as a **single object**. It’s a good idea to think of its shape before writing any code. What’s the minimal representation of your app’s state as an object?

Now that we’ve decided what our state object looks like, we’re ready to write a reducer for it. The reducer is a pure function that takes the previous state and an action, and returns the next state.

Things you should **never** do inside a reducer:
* Mutate its arguments;
* Perform side effects like API calls and routing transitions;
* Calling non-pure functions, e.g. Date.now() or Math.random().

#### No side effects. No API calls. No mutations. Just a calculation.
