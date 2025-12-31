import React from 'react'

function InfoCard({
    title,
    subtitle,
    description,
    image,
    cta,
    variant = "default",
    align = "left",
}) {
    return (
        <div className={`info-card info-card--${variant} align-${align}`}>
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