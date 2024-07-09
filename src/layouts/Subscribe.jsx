

const Subscribe = () => {
    return (
        <section className="newsletter gray-bg container fs-200">
            <div>
                <h3 className="fs-500 fw-bold mg-bt-1">Subsrcibe to our Newsletter</h3>
                <p>Stay updated with tje latest trends and exclusive offers.</p>
                <p>Subscribe to our newsletter now!</p>
            </div>
            <div className="subscribe">
                <input type="email" name="email" id="email" placeholder="Your email address" />
                <button className="btn subscribe-btn fw-bold fs-300">Search</button>
            </div>
        </section>
    )
}

export default Subscribe;