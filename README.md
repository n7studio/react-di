# react-di

A dependency injection container package for React.

## How to configure it?

Create a config factory to return your dependency.

```javascript
const config = {
  hello: () => {
    return "Hello world!";
  },
};
```

Wrap the application with the ContainerProvider and pass your dependency config

```javascript
ReactDOM.render(
  <React.StrictMode>
    <ContainerProvider config={config}>
      <App />
    </ContainerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

To access the dependency use the hook: useDependency

```javascript
const hello = useDependency('hello')
```