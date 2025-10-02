const PostCard = ({title, author, excerpt}) => {
    return (
        <>
            <div className="max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="m-3 text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
                <p className="font-normal text-gray-700">{excerpt}</p>
                <p className="text-gray-400 m-3">{author}</p>
            </div>
        </>
    )
}

export default PostCard