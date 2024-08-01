import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
/* input validation*/
Card.propTypes = {
    card: {
        plan: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        features: {
            users: PropTypes.string.isRequired,
            storage: PropTypes.string.isRequired,
            projects: PropTypes.string.isRequired,
            access: PropTypes.string.isRequired,
            privprojects: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            freesub: PropTypes.string.isRequired,
            reports: PropTypes.string.isRequired,
        },
    },
};
function Card({ card }) {
    return (
        <div className="col mt-3">
            <div className="card mb-3 rounded-4 shadow-sm">
                <div className="card-header py-3 text-center">
                    <h6><small className="fw-bold text-secondary text-uppercase opacity-50">{card.plan}</small></h6>
                    <h1 className="card-title pricing-card-title">${card.price}/month</h1>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled lh-lg mb-2 text-left fw-medium opacity-75">
                        {card.features.map((feature, index) => {
                            return <li key={index}>{
                                feature.enable ? (<span><FontAwesomeIcon icon={faCheck}/>{" "}{feature.name}</span>)
                                    : (<span className=" text-muted opacity-50 "><FontAwesomeIcon icon={faXmark}/>{" "}{feature.name}</span>)
                            }
                            </li>
                        })} 
                        <button type="button"
                            className="w-100 rounded-pill btn btn-primary mt-2  fw-medium  text-uppercase"><small> button</small></button> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card