import PostCard from "../components/PostCard"

const Blog = () => {
    return (
        <div>
            <h1>Blog Page</h1>
            <div className="grid grid-cols-3">
                <PostCard 
                title="News Hedline Goes Here" 
                excerpt="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                author="Elyas Barahouei Nejad" 
            />
                <PostCard 
                title="News Hedline Goes Here" 
                excerpt="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                author="Elyas Barahouei Nejad" 
            />
                <PostCard 
                title="News Hedline Goes Here" 
                excerpt="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                author="Elyas Barahouei Nejad" 
            />
                <PostCard 
                title="News Hedline Goes Here" 
                excerpt="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                author="Elyas Barahouei Nejad" 
            />
                <PostCard 
                title="News Hedline Goes Here" 
                excerpt="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                author="Elyas Barahouei Nejad" 
            />
            </div>
        </div>
    )
}

export default Blog