This repo is to demonstrate a bug with `loadable.lib` and dynamic imports. To reproduce:

```shell
yarn
yarn build
yarn start
```

Then open http://localhost:8080. The page will hang, check the output from the server.
