import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text text-blue-50">
        Vous avez un projet en tête ? <br className="sm;block hidden"/>
        Concrétisons-le ensemble.
        </p>
        <Link to='/contact' className="btn">
        Contact
        </Link>
    </section>
  )
}

export default CTA