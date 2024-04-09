function App() {
  const testVar = import.meta.env.VITE_TEST_VAR;

  return (
    <>
      <h1>Hello World</h1>
      <h1>env variable: {testVar}</h1>
    </>
  )
}

export default App
