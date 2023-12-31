import React from 'react';
import { Link } from 'react-router-dom';

const LogoPage = () => {
    return (
        <Link className="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0 order-0" to="/">
                        <div className="d-flex align-items-center">
                            <svg className="f-w-7" xmlns="http:www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fillRule="evenodd"/></svg>
                        </div>
                    </Link>
    );
};

export default LogoPage;

