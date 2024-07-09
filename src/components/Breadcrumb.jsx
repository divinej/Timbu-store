
const Breadcrumb = ({title}) => {
    return (
        <div className="breadcrumb fs-300">
            <p>Timbu {`>`} <span className="yellow-text">{title}</span></p>
        </div>
    )
}

export default Breadcrumb;