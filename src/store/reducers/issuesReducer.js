const initialState = {
    issues: [
        "Issue#1: Database Connectivity Failure",
        "Issue#2: RestAPI call made and couldn't fetch any data",
        "Issue#3: External API call authorization failed",
        "Issue#4: Database servers are down",
        "Issue#5: UI rendering error"
    ],
    filteredIssues: [],
    selectedIssue: ""
}

const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'resetFilteredIssues': 
            return {
                ...state,
                filteredIssues: []
            }
        case 'updateFilteredIssues':
            let issues = [...state.issues];
            let filteredIssues = [];
            if (action.searchKey != '') {
                filteredIssues = issues.filter((str) => str.toLowerCase().includes((action.searchKey).toLowerCase()));
            }
            return {
                ...state,
                filteredIssues: filteredIssues
            }
        case 'setSelectedIssue':
            return {
                ...state,
                selectedIssue: action.selectedIssue
            }
        default:
            break;
    }
    return state;
}

export default issuesReducer;