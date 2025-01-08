// import Govind from "./RenderNumberList";
// import Card from "./components/Card";
// import ConditionalRender from "./components/ConditionalRender";
// import { Notification } from "./components/Notification";
// import { UserGreeting } from "./components/Notification";
// import RenderList from "./components/RenderList";
// import { ObjectList } from "./components/ObjectList";
// import ReactProps from "./ReactProps";
import State from "./components/State";

function App() {
  // const [childMessage, setChildMessage] = useState("");
  // const name = "Govind!";
  // function add(a, b) {
  //   return a + b;
  // }
  // const array1 = [2, 4, 6, 8, 10];
  // const user = { name: "Cuvette", domain: "EdTech" };
  // const user = null;
  // const message = "Hello from Parent!";
  // const handleChildMessage = (message) => {
  //   setChildMessage(message);
  // };

  return (
    <>
      <State />
      {/* <h1>Parent App Component</h1> */}
      {/* <h1>{childMessage}</h1> */}
      {/* <ReactProps sendMessage={handleChildMessage} /> */}
      {/* <Card /> */}
      {/* {array1.map((item, index) => {
        return <Card key={index} item={item} />;
      })} */}
      {/* <ObjectList /> */}
      {/* <ReactProps message={message} /> */}
      {/* <RenderList /> */}
      {/* <ConditionalRender isLoggedIn={true} /> */}
      {/* <Notification hasNotifications={false} /> */}
      {/* <UserGreeting user={user} /> */}
      {/* <h1>Hello, I am {props.common}!</h1> */}
      {/* <p>{23 + 78}</p> */}
      {/* <h1>{name}</h1> */}
      {/* <span>{add(2, 3)}</span> */}
      {/* <h1>
        {array1.map((num, index) => {
          return <Govind num={num} index={index} />;
        })}
      </h1> */}
    </>
  );
}

export default App;
