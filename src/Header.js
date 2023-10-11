import React from 'react'
import "./Header.scss"

export default function Header() {
    return (
        <div className='Header'>
            <div className='navbar-top'>
                <div className='logo'>
                    <img src="logo512.png" width='45px' />
                </div>
                <a href='#'>Exclusive Deals</a>
                <a href='#'>Holiday Foods</a>
                <a href='#'>Restaurants</a>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#"><span class="material-symbols-outlined">support_agent</span>Contact Us</a></li>
                        <li><a class="dropdown-item" href="#"><span class="material-symbols-rounded">info</span>About Us</a></li>
                        <li><a class="dropdown-item" href="#"><span class="material-symbols-rounded">work</span>See Positions</a></li>
                    </ul>
                </div>
            </div>
            <div className='navbar-down'>
                <div className='menu'>
                    <img src='../img/Navbar-menu.png' width='45px' />
                </div>
                <a href='/fastfood'><span class="material-symbols-outlined">fastfood</span>Breakfast</a>
                <a href='#'><span class="material-symbols-outlined">lunch_dining</span>Burgers</a>
                <a href='#'><span class="material-symbols-outlined">emoji_food_beverage</span>beverages</a>
                <a href='#'><span class="material-symbols-outlined">local_shipping</span>delivery</a>
                <button className='btn-navbar-down' type='button'>ORDER NOW</button>
            </div>
        </div>
    )
}
