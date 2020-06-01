import React from "react";
import "./Summary.scss";

export const Summary = ({ items }) => {
    return (
        items && (
            <dl className={`summary summary--${items.length}-items`}>
                {items.map((item) => (
                    <div className="summary__item">
                        <dt className="summary__item-label">{item.label}</dt>
                        <dd className="summary__item-value">{item.value}</dd>
                    </div>
                ))}
            </dl>
        )
    );
};
