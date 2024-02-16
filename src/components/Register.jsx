import React from 'react';

const Register = () => {
    return (
        <div className="register-container">
            <h2 style={{textAlign:'center'}} className='m-2'>Join Homeal as a Chef</h2>
            <p className='m-1'>At Homeal, we believe in celebrating the diversity of homemade food and the stories behind it. Our platform connects talented home chefs with food lovers looking for authentic and delicious homemade meals.</p>

            <h3 className='m-1'>Chef Requirements:</h3>
            <ul className='m-1'>
                <li className='m-1'>Passionate about cooking and sharing homemade meals</li>
                <li className='m-1'>Ability to prepare a variety of dishes from different cuisines</li>
                <li className='m-1'>Commitment to maintaining high standards of hygiene and food safety</li>
                <li className='m-1'>Strong communication skills and a friendly personality</li>
            </ul>
            <h3 className='m-1'>If you feel you are the one having all these Requirements..</h3>
            <h3 className='m-1'>Apply to Become a Chef:</h3>
            <form className='m-1'>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />

                <label htmlFor="experience">Cooking Experience (years):</label>
                <input type="number" id="experience" name="experience" required />

                <label htmlFor="cuisines">Cuisines You Can Cook:</label>
                <input type="text" id="cuisines" name="cuisines" required />

                <label htmlFor="message">Why Do You Want to Join Homeal?</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit" className='btn btn-outline-dark'>Submit Application</button>
            </form>
        </div>
    );
};

export default Register;
