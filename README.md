# My first VueJs Project
This project is a simple vending interface which shows a product,it's types and their disponibilities.<br>
The goal of this project is to pass through a set of step by step course, covering core concepts of Vue.js during the client-side framework course.

## Modules
### 1. create A Vue app 
```js
const app = Vue.createApp({});
const mountedApp = app.mount("#app");
```
### 2. Data-binding
To use data inside of html code OR template we need to use the data binding technique
```html
<div id="app">
    <h1>{{variableName}}</h1>
</div>
```
### 3. Attribute interpolations
Mustaches **`{{}}`** cannot be used inside HTML attributes. Instead, use a v-bind or shorthand **`:`** 

```js
<div id="app">
    <h1 v-bind:style="variableName">{{variableName}}</h1>
    <h1 :style="variableName">{{variableName}}</h1>
</div>
```
### 4. Conditional Rendering
1. if 
    The directive **`v-if`** is used to conditionally render a block. The block will only be rendered if the directive’s expression returns true.
    ```js
    <div id="app">
        <h1 v-if="condition">{{variableName}}</h1>
    </div>
    // H1 Will contain variableName's value if condition is true
    ```
2. else
    We can use the v-else directive to indicate an “else block” for v-if:
    A v-else element must `immediately follow` a v-if or a v-else-if element - otherwise it will not be recognized.
     ```js
    <div id="app">
        <h1 v-if="condition">{{variableName}}</h1>
        <h1 v-else>{{variableName2}}</h1>
    </div>
    // H1 Will contain variableName's value if condition is true or it'll contain variableName2's value if the condition is false.
    ```
3. else if
    The v-else-if, as the name suggests, serves as an “else if block” for v-if. It can also be chained multiple times.
    ```html
    <div id="app">
        <h1 v-if="condition">{{variableName}}</h1>
        <h1 v-else-if="condition2">{{variableName2}}</h1>
        <h1 v-else>{{variableName3}}</h1>
    </div>
    ```

### 5. List Rendering
We can use the `v-for` directive to render a list of items based on an array. The `v-for` directive requires a special syntax in the form of **item in items**, where items is the source data array and item is an alias for the array element being iterated on. Or we can use with a range using `**i in n**`
```html
<div id="app">
    <ul id="example-1">
        <li v-for="item in items" :key="item.message">{{ item.message }}</li>
    </ul>
</div>
```
### 6. Event handeling
We can use the **`v-on`** OR **`@`** directive to listen to DOM events and run some JavaScript when they’re triggered.
```html
<div id="app">
  <button v-on:click="doSomething">example</button>
  <button @click="doSomething">example</button>
</div>
```
### 7. Style and Class binding
A common need for data binding is manipulating an element’s class list and its inline styles. Since they are both attributes, we can use v-bind to handle them.
```html
<div id="app">
    <div v-bind:class="{value : nomVaribale}">  </div>
    <div v-bind:style="{attribute : nomVaribale}">  </div>
</div>
```
### 8. Computed properties
A computed property is used to declaratively describe a value that depends on other values. When you data-bind to a computed property inside the template, Vue knows when to update the DOM when any of the values depended upon by the computed property has changed.
```js
const app = Vue.createApp({
    data : function(){
        return{
            test : 'test',
            test1 : 'test1'
        }
        },
    computed :{
        testing(){
            return this.test1+this.test;
        }
    }
});
```
```html
<div id="app">
    <h1>{{testing}}</h1>
</div>
```
