export const ObjectList = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{`${user.name} - ${user.age} years old`}</li>
      ))}
    </ul>
  );
};
