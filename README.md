# chat
Simple Chat app written in Ionic2 . Just for learning purposes 

It uses:
* https://randomuser.me/ 
* https://cleverbot.io/
* https://www.npmjs.com/package/random-words
* http://ionicframework.com/docs/v2/

# Installation 
Require nodejs installed then:

```npm install -g ionic@beta```

in the directory of the project 

```npm install ```

Set up a clevebot api key in  ```app/providers/chat/chat.ts``` for example in the constructor:

```this.cleverbot.key={user:"TfIxXerlZ9H7X2oM", key:"ryXfNBURqgBDdSFYwvHUdalj2grhClRX"}```

you can get new ones in https://cleverbot.io/keys

to run in local browser 

```ionic serve ```

