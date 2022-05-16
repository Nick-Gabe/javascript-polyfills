# Javascript Polyfills
![](https://img.shields.io/github/contributors/nick-gabe/javascript-polyfills)
![](https://img.shields.io/github/license/nick-gabe/javascript-polyfills)

This is an open-source project, where we try to do a polyfill for every (or almost all of them) Javascript Methods that currently exist. You can use them as polyfills for your project, to learn how to replicate a specific method, or any purpose you would need.

## **What is a polyfill?**
A polyfill is a recreation of an existing resource, that can be used if a browser or context doesn't have support for the original one.
For example, if you enter [Mozilla Array.prototype.flat() compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#browser_compatibility) you will see that it doesn't exist on Internet Explorer, so a way to keep using it would be inserting a polyfill that recreates that method using supported methods.

## **How to test them?**
First download/clone/fork the repo, now go to the terminal and type `npm run time <object/method>`, for example `npm run time array/flat` or `npm run time array/map`.
That script will run their test, which you can locate at the folder "test/object/method.js", you can change the test however you like.

## **Links**
* [**How to use a polyfill**](./HOWTOUSE.md)

## **Details**
Fell free to add an [issue](https://github.com/Nick-Gabe/javascript-polyfills/issues/new) if you find any bug, or maybe a [pull request](https://github.com/Nick-Gabe/javascript-polyfills/pulls) for any improvement you think would be useful :).

**New polyfills are accepted, but you can also modify the ones that are already there.*