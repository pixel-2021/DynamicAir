import React from 'react';

export default function Addressmap() {
  
  return (
    <div className='row m-0'> 

    <div className="google-map-code col-6">
      <h4>Manufacturing Unit-I</h4>
      { <div dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.6302840296116!2d80.18567913442996!3d12.951154020617402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266efd3ffffff%3A0x268939083f42f014!2sDYNAMIC%20AIR%20ENGINEERING!5e0!3m2!1sen!2sin!4v1647441413975!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'}}/> }
    </div> 
    <div className="google-map-code col-6">
    <h4>Manufacturing Unit-II</h4>
      { <div dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.950771885714!2d79.84833541527024!3d13.038805516926939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a529375da32cc17%3A0x45b34144d1905b8c!2sDynamic%20Air%20Engineering%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1656927805264!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}}/> }
    </div>
    </div>
  )
}

