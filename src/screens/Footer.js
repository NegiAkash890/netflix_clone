import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <h3>Questions ?  Call 000-111-000-1111</h3>
             <div className='footer_links'>
                 <div>
                     <ul>
                         <li>FAQ</li>
                         <li>Investors Relation</li>
                         <li>Privacy</li>
                         <li>Speed Test</li>
                     </ul>
                 </div>
                 <div>
                      <ul>
                         <li>Help Center</li>
                         <li>Job</li>
                         <li>Cookie Prefences</li>
                         <li>Legal Notices</li>
                     </ul>
                 </div>
                 <div>
                      <ul>
                         <li>Account</li>
                         <li>Ways to Watch</li>
                         <li>Corporate Information</li>
                         <li>Netflix Originals</li>
                     </ul>
                 </div>
                 <div>
                      <ul>
                         <li>Media Center</li>
                         <li>Terms of Use</li>
                         <li>Contact Us</li>
                     </ul>
                 </div>
             </div>
             <div>
             <select>
                 <option value='English'>English</option>
                 <option value='Hindi'>Hindi</option>
             </select>
             </div>
             <p>Netflix India</p>
        </div>
    )
}

export default Footer
