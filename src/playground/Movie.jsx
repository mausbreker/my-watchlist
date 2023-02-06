import propTypes from 'prop-types';

function Movie ({title, image}) {
    return (
        <>
            <figure>
                <img src={image} alt="" />
                <figcaption>{title}</figcaption>
            </figure>
            <hr />
        </>
    )
}

export default Movie;

Movie.propTypes = {
    image: propTypes.string,
    title: propTypes.string
}