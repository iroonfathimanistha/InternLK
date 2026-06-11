import Button from './components/Button';

function App() {
  return (
    <div className="p-8 space-x-4">
      <Button>Click me</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button loading={true}>Saving...</Button>
    </div>
  );
}

export default App;