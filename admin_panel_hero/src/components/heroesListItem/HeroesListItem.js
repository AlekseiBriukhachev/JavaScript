
const HeroesListItem = ({ name, description, element, onDelete }) => {

    let elementClassName;

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    return (
        <li
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
            <img src="data:image/png;base64,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"
                className="img-fluid w-25 d-inline"
                alt="unknown hero"
                style={{ 'objectFit': 'cover' }} />
            <div className="card-body">

                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span onClick={onDelete}
                className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button type="button" className="btn-close btn-close" aria-label="Close"></button>
            </span>
        </li>
    )
}

export default HeroesListItem;