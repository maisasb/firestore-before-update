# firestore-before-update

## Project setup

1. Install dependencies

```
yarn install
```

2. Create a project in firestore that has a collection of "users"
   Or change the collection name in HelloWorld.vue file.

```
firestore.collection("users").get();
```

3. Change env.prod file to your firestore values

## How to reproduce the error

1. Run project in production mode

```
yarn serve:prod
```

2. Open the app in Safari v.16 or iOS 16 (any browser)

3. Open the dev tools and click to preserve logs on Console

4. Reload the page and will fire firestore error only once
