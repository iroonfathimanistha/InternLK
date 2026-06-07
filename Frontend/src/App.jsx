import {Routes,Route,Link} from 'react-router-dom'; //link- a clickable thing that changes the URL without reloading
//Routes – a container that looks at the current URL and decides which Route to show.
//Route – a rule that says “if the URL matches this path, show this element
// Routes- tagA switchboard. It looks at the current URL (e.g., http://localhost:5173/) and finds the first Route that matches.


function App() {
  return(
    <div className='p-8 bg-blue-100 min-h-screen'>
      <h1 className='text-3xl font-bold text-blue-800'> Tailwind is working now!</h1>
    </div>
  );

}

export default App;