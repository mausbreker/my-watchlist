import logo from '../logo.svg'

function UserImage() {
    return (
        <div className="img-wrap">
            <figure>
                <img src={logo} alt="logo" />
                <figcaption>React logo</figcaption>
            </figure>
            <AdditionalDesc />
        </div>
    )
}

function AdditionalDesc () {
    return (
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis consequatur unde quae aliquid natus sit? Cupiditate aspernatur, necessitatibus corrupti perferendis ipsum recusandae! Repudiandae iusto autem rem molestiae dolorem labore.
        </p>
    )
}

export default UserImage;