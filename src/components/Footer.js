import React from 'react';
import './../styles/footer.scss';

export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    
    return (
        <div className="footercontainer">
            <div className="footer">
                <div className="footer-column">
                    by <b>marissa wong</b> &copy; {year}
                </div>
                <div className="footer-column">
                    <a href="/github"><i class="fa fa-github" /></a>
                    <a href="/facebook"><i class="fab fa-linkedin"/></a>
                    <a href="/instagram"><i class="fa fa-envelope"/></a>
                    <a href="/dev"><i class="fab fa-dev"/></a>
                </div>
            </div>
        </div>
    )
}