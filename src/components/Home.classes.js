import React from "react";
import { connect } from "react-redux";

import { selectFormValue } from "../selectors/forms.selectors";
import { setValue } from "../actions/forms.actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.setValue("user.email", "adam@500tech.com");
    this.props.setValue("user.password", "");
  }

  componentWillUnmount() {
    this.props.setValue("user.email", undefined);
    this.props.setValue("user.password", undefined);
  }

  render() {
    const { locale, setValue, email, password } = this.props;

    return (
      <div className="login-form">
        <form>
          <input
            value={email}
            onChange={e => setValue("user.email", e.target.value)}
            placeholder="Your email address"
            type="email"
          />
          <input
            value={password}
            onChange={e => setValue("user.password", e.target.value)}
            placeholder="Your password"
            type="password"
          />
          <button>login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: selectFormValue(state, "user.email"),
  password: selectFormValue(state, "user.password")
});
export default connect(
  mapStateToProps,
  { setValue }
)(Home);
