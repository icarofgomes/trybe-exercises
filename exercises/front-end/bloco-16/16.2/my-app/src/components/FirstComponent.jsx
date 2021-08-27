import React, { Component } from 'react';
import { connect } from 'react-redux';

class FirstComponent extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        <div>
          {list.map((element, index) => (
            <p key={ index }>{ element }</p>
          ))}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  list: state.myReducer
});

export default connect(mapStateToProps)(FirstComponent);
