import { useState } from "react";
import Button from "../../Components/Button/Button";
import { connect, useDispatch } from "react-redux";
import axios from "axios";

const Home = (props) => {
  const dispatch = useDispatch();

  const [userList, setUserList] = useState([
    "Guest",
    "Admin",
    "Adil",
    "Joe",
    "Adam",
    "Sourav",
  ]);

  const fetchUser = () => {
    return (dispatch) => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          //console.log(response.data[0].name);
          var payload = { user: response.data[0].name };
          dispatch({ type: "CHANGE_USER", payload });
        })
        .catch((error) => {
          //Error
        });
    };
  };

  const loginButtons = userList.map((user) => {
    var payload = { user: user };
    return (
      <Button
        click={() => {
          dispatch({ type: "CHANGE_USER", payload });
        }}
        label={user}
        currentUser={user === props.user}
      >
        user
      </Button>
    );
  });
  return (
    <div>
      <h1>Currently logged in as {props.user}</h1>
      <p>{loginButtons}</p>
      <p>
        <Button
          click={() => {
            dispatch({ type: "LOGOUT" });
          }}
          label={"Logout"}
          currentUser={false}
        ></Button>
      </p>
      <p>
        <Button
          click={() => {
            dispatch(fetchUser());
          }}
          label={"Random User(Thunks)"}
          currentUser={false}
        ></Button>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  console.log(props);
  const payload = { user: "Adil" };
  return {
    changeUser: () => dispatch({ type: "CHANGE_USER", payload }),
    logOut: () => dispatch({ type: "LOGOUT" }),
  };
};

export default connect(mapStateToProps)(Home);
