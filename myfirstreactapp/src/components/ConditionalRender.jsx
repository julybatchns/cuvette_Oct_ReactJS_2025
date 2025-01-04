/* eslint-disable react/prop-types */
const ConditionalRender = (props) => {
  return props.isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In.</h1>;
  // if (props.isLoggedIn) {
  //   return <h1>Welcome Back!</h1>;
  // } else {
  //   return <h1>Please Log In.</h1>;
  // }
};

export default ConditionalRender;
