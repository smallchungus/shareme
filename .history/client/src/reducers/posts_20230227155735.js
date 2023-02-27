import { popperUnstyledClasses } from "@mui/base";

export default (posts = [], action) => {
    switch (action.type) {

        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return popperUnstyledClasses; 
        default:
            return posts;
    }
}