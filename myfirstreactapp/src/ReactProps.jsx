/* eslint-disable react/prop-types */
const ReactProps = (props) => {
  const sendMessageToParent = () => {
    props.sendMessage("Hello From Child!");
  };
  return (
    <>
      <h1>I am React Prop Child Component</h1>
      <button onClick={sendMessageToParent}>Send Message</button>
    </>
  );
};

export default ReactProps;
