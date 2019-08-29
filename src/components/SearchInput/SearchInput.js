import React, { Component } from 'react';
import IssuesList from '../IssuesList/IssuesList';
import { connect } from 'react-redux';

class SearchInput extends Component {
    componentDidMount() {
        this.props.resetFilteredIssues();
    }

    issueOnClickHandler = (selectedIssue) => {
        this.props.setSelectedIssue(selectedIssue);
        this.props.history.push({
            pathname: "/bugInfo"
        });
    }

    render() {
        return (
            <div>
                <h2>Start typing to search issues!</h2>
                <input type="text" onChange={(event) => this.props.updateFilteredIssues(event.target.value)} />
                <IssuesList issues={this.props.filteredIssues} issueOnClick={this.issueOnClickHandler}></IssuesList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        issues: state.ir.issues,
        filteredIssues: state.ir.filteredIssues
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetFilteredIssues: () => dispatch({ type: 'resetFilteredIssues' }),
        updateFilteredIssues: (searchKey) => dispatch({ type: 'updateFilteredIssues', searchKey: searchKey }),
        setSelectedIssue: (selectedIssue) => dispatch({ type: 'setSelectedIssue', selectedIssue: selectedIssue })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);