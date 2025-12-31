import React from 'react'
import InfoCard from '../../../shared/compoents/InfoCard'
import './about.scss'
import wafer from '../../../assets/images/wafer.png'
function AboutCapabilities() {
    return (
        <div className="about-grid">
            <InfoCard
                variant="feature"
                title="Material Purity"
                description="Ultra-high purity silicon with ultra-low defect density, tightly controlled resistivity, and crystal orientation."
                background={'https://www.chidamineral.com/data/upload/ueditor/20241028/671f5fec6f6a9.png'}
            />
            <InfoCard
                variant="feature"
                title="Advanced Manufacturing"
                description="Precision-controlled crystal growth, wafer slicing, polishing, and inspection using advanced semiconductor processes."
                background={'https://cdn.prod.website-files.com/60a3c1fc44c5715c395770e7/6419d7de0e1438bee76a16a3_Depositphotos_23946029_L.jpg'}
            />

            <InfoCard
                variant="feature"
                title="Global Standards"
                description="Manufactured under internationally recognized quality, safety, and environmental standards for semiconductor applications."
                background={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ISO_Logo_%28Red_square%29.svg/1113px-ISO_Logo_%28Red_square%29.svg.png'}
            />

        </div>
    )
}

export default AboutCapabilities