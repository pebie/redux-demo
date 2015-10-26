# Actions

**Actions** are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch()`.

* Actions are plain **JavaScript objects**. Actions must have a **type** property that indicates the type of action being performed. Types should typically be defined as **string constants**. Once your app is large enough, you may want to move them into a separate module.

* Pass as little data in each action as possible. For example, it’s better to pass index than the whole object.


**Action creators** are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator,” so do your best to use the proper term.

```javascript
function myAction(data) {
  return {
    type: TYPE_AS_CONSTANT,
    data
  };
}
```
