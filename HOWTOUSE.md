## **How to use a polyfill?**
If you're planning to use that polyfill on a browser, one way to do is:
### 1 - Create a file called polyfills.js
You can create it anywhere on your project.
### 2 - Insert on the file all the polyfills you need
Make sure all the requirements for that polyfill also exist, else you need their polyfills aswell.
```js
// these are the requirements for this polyfill to work properly, if your browser already have them, you don't need to use their polyfills, feel free to remove the lines.
require('./flat');
require('./slice');
require('./push');

Array.prototype.concat = function (...values) {
    const newArray = this.slice()
    Array.prototype.push.apply(newArray, values.flat(1))
    return newArray
}
```
### 3 - Import the file through a script tag in your html (check the file path)
```html
<!DOCTYPE html>
<html lang="en">
<head>...</head>
<body>
    ...
    <script src="./polyfills.js"></script>
</body>
</html>
```
### 4 - **Done! Now you can use your polyfills as if they were native.**