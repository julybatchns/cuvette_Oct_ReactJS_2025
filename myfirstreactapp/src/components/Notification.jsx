/* eslint-disable react/prop-types */
// export function Notification(props) {
//   return (
//     <>
//       <h1>Dashboard</h1>
//       {props.hasNotifications ? <p>You have new notifications!</p> : null}
//     </>
//   );
// }

export function UserGreeting(props) {
  return (
    <div>
      {props.user ? (
        <h1>Welcome, {props.user.name}!</h1>
      ) : (
        <h1>Please sign up or log in.</h1>
      )}
    </div>
  );
}
