import React from 'react'
import '../styles/infoCard.scss'
function InfoCard({
    title,
    subtitle,
    description,
    image,
    background,
    cta,
    variant = "default",
    align = "left",
}) {
    return (
        <div className={`info-card info-card--${variant} align-${align}`}>
            {background && (
                <div 
                    className="info-card__bg" 
                    style={{ backgroundImage: `url(${background})` }}
                />
            )}
            {image && (
                <div className="info-card__media">
                    <img src={image} alt={title} />
                </div>
            )}

            <div className="info-card__content">
                {subtitle && <p className="info-card__subtitle">{subtitle}</p>}
                {title && <h3 className="info-card__title">{title}</h3>}
                {description && (
                    <p className="info-card__description">{description}</p>
                )}

                {cta && <div className="info-card__cta">{cta}</div>}
            </div>
        </div>
    )
}

export default InfoCard