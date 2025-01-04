const RenderList = () => {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default RenderList;
