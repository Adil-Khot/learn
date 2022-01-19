import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  const user = props.user;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
