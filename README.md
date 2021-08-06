# react-di

A dependency injection container package for React.

## How to configure it?

- Create a config factory to return your dependency.


const config = {
  hello: () => {
      return "Hello world!";
  }
};


- Wrap the application with the ContainerProvider and pass your  dependency config

ReactDOM.render(
  <React.StrictMode>
    <ContainerProvider config={config}>
      <App />
    </ContainerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

- To access the dependency use the hook: useDependency

const hello = useDependency('hello')