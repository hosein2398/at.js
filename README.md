
# @JS
Very lightweight tool to change your @ prefixed strings into links.

# Usage
Load it inside you html file then:
```Js
atJs({
    tagName : "#test",
    baseUrl: "www.mysitename.com/users/"
});
```
It will get #test's content and replace it's @s with links with href of baseUrl and users name and end of that.
For instance , if you have this inside you #test tag:
```
Here is a test for some users name like @Tom and @Jim.
```
That will turn into this:
```
Here is a test for some users name like <a href='www.mysitename.com/users/Tom'>@Tom</a> and <a href='www.mysitename.com/users/Jim'>@Jim</a>.
```
## Options


## API
##### atJs([options]) 
Returns `string` if `changeDom` is set to false.

##### options  
Type: `Object`  
Available options : `tagName` , `text` , `changeDom` , `baseUrl` .

###### tagName
 Type : `domNode`  
 Required : `true` (if `test` is not defined)
 
 ###### text
 Type : `String`  
 Required : `true` (if `tagName` is not defined)
 
 ###### baseUrl
 Type : `String`  
 Required : `true`
 
 ##### changeDom
 Type : `Boolean`  