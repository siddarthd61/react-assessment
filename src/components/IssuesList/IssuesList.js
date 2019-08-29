import React from 'react';
import classes from './IssuesList.module.css'

const issuesList = props => {
    let issues = (props.issues).map((issue, index) => {
        return(
            <li key={index} onClick={() => props.issueOnClick(issue)}>{issue}</li>
        )
    });
    
    return (
        <ul className={classes.issuesList}>
            {issues}
        </ul>
    )
};

export default issuesList;