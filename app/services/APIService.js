import { RelativePathUri } from "../utils/ApiConstants";

export const fetchNewsIds = async() => {
    try {
        const response = await fetch(RelativePathUri.FetchHeckerNewsIds);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}
    
    export const fetchNewsItem = async (props) => {
        try {
            const response = await fetch(RelativePathUri.FetchNewsItem + props + '.json');
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    }

