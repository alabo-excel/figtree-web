import React from 'react'

const Map = () => {
  return (
    <div className="address-map">
          {/* <img src="/assets/map.png" className="w-full" alt="" /> */}

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.675144831747!2d3.449054773862575!3d6.435754493555421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf73c138dbedb%3A0x6ce2cd9ce683c562!2sThe%20Palms%20Shopping%20Mall!5e0!3m2!1sen!2sng!4v1699216372100!5m2!1sen!2sng" width="600" height="450" style={{border:0}} loading="lazy" ></iframe>
    </div>
  )
}

export default Map