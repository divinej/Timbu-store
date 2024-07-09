

const Pagination = () => {
    return (
        <div className="pagination">
            <button className="btn pagination-btn">Show More</button>

            <div className="pagination-conatiner flex">
                <div className="pagination-circle p-prev">{`<`}</div>
                <div className="pagination-circle active">1</div>
                <div className="pagination-circle">2</div>
                <div className="pagination-circle">3</div>
                <div className="pagination-circle">4</div>
                <div className="pagination-circle">5</div>
                <div className="pagination-circle">...</div>
                <div className="pagination-circle">21</div>
                <div className="pagination-circle p-next">{`>`}</div>
            </div>
        </div>
    )
}

export default Pagination;