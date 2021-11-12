import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './DashboardHome.css';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className='dashboar-home'>
            <div className='container'>
                <div className='my-dashboard-title'>
                <h2><i className="fas fa-home"></i> My Dashboard</h2>
                </div>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='my-dashboard-content'>
                            <div className='content-img'>
                                <img className='img-fluid' src={user.photoURL} alt="" />
                            </div>
                            <div className='content-text'>
                                <h2>Hey, {user.displayName}</h2>
                                <h3>Welcome to <span>CHAMP MOTO</span> Dashboard</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;