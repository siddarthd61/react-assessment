import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './BugInfo.module.css';

class BugInfo extends Component {
    backButtonHandler = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <h2>Description of the Bug</h2>
                <h3>{this.props.selectedIssue}</h3>
                <div className={classes.errorContainer}>
                    Error: Invalid username/password
                </div>
                <button onClick={this.backButtonHandler}>Back to Search Issues</button>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        selectedIssue: state.ir.selectedIssue
    }
}

export default connect(mapStateToProps)(BugInfo);