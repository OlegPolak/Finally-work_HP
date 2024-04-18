import Hero from "./hero/Hero";
import Hogwarts from "./hogwarts-menu/Hogwarts-menu";
import Student from "./student/Student";
import Employees from "./employees/Employees";

function App() {
  return (
    <div className="App">

      <Hero />

      <Hogwarts/>
      
      <Student />
      
      <Employees/>
    </div>
  );
}

export default App;
