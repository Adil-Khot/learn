import { connect } from "react-redux";

const LoginData = (props) => {
  if (props.user) return <div>{"Currently logged in as " + props.user}</div>;
  else
    return (
      <div>
        {"Currently Not Logged in, Goto Home page and select the user Account"}
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(LoginData);
