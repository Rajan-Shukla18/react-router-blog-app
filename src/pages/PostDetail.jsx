import { useParams } from "react-router-dom";

const PostDetail = () => {
    const { id } = useParams();

    return (
        <div className="post-detail-page">
            <h1>Post Detail</h1>
            <p>Viewing details for post ID: {id}</p>
        </div>
    );
};

export default PostDetail;
