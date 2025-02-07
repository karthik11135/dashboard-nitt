import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h3 className="mx-10 p-2 font-medium text-center border rounded-md shadow-md mb-4">
        Mess
      </h3>
      <div className="mx-10  py-5 border rounded-t-lg p-2">
        <div className="text-center font-medium text-3xl mx-4 px-4 pb-1.5 rounded-2xl shadow-xl">
          <div className="">
            <img className="scale-75 rounded" src="/profilepic.jpeg"></img>
          </div>
          <h1>
            Hi, <br></br> Nakkina Santosh Kumar (111121076).
          </h1>
          <p>
            You have <br></br> been <br></br> allocated <br></br> Annapurna Mess{" "}
            <br></br> for February <br></br> 2025.
          </p>
          <hr className="mt-12 mb-5 font-extralight"></hr>
        </div>
      </div>
      <div className="text-center font-extralight py-3  w-full bottom-0 border">
        Made with <span className="text-sm">🖤</span> by{" "}
        <span className="text-blue-500">Delta Force</span>
      </div>
    </div>
  );
}

export default App;
