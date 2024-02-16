import React from 'react';
import '../products.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
    const items = [
        {
            name: 'Roti Meals',
            description: '4 Roti served with Sabji and Dal',
            price: '130/-',
            image: 'https://images.pexels.com/photos/4552045/pexels-photo-4552045.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Rice Meals',
            description: 'Plain Rice served with Sambar and Palya',
            price: '130/-',
            image: 'https://images.pexels.com/photos/19781600/pexels-photo-19781600/free-photo-of-meals-in-black-frying-pans.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Full Meals',
            description: '2 Roti, 1 Sabji, Dal, Rice, Salad, Pickle/Curd',
            price: '169/-',
            image: 'https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?w=1060&t=st=1708104213~exp=1708104813~hmac=a49708176f1d34cfaddb7e7f5b4288c3230cf59eba9d0ee76dde106e31da6b0a'
        },
        {
            name: 'North Breakfast Items',
            description: 'Allo parata/Methi parata/Mix Veg parata/Muli ke parata/Besan ke chille/Puri Allo/Poha',
            price: 'Starting from 99/-',
            image: 'https://imgmedia.lbb.in/media/2021/02/6028f2782bea65187ce63f97_1613296248330.jpg'
        },
        {
            name: 'South Breakfast Items',
            description: 'Idly chutney/Neera Dosa/Upitu/Avalaki/Masala Dosa/Chow Chow Bath',
            price: 'Starting from 99/-',
            image: 'https://res.cloudinary.com/hamstech/images/v1632121563/Hamstech%20App/Title-Image_80464696efa86/Title-Image_80464696efa86.jpg?_i=AA'
        },        
    ];

    const handleOrderNow = () => {
        const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const url = isiOS
            ? 'https://apps.apple.com/in/app/homeal/id1571860810'
            : 'https://play.google.com/store/apps/details?id=com.localzi.homeal';
        window.location.href = url;
    };

    return (
        <div className="products-container">
            <div className="description">
                <h2>What We Serve</h2>
                <p>We deliver only Homemade food which includes multiple cuisines, according to the customer’s preferences. Such as South Indian, North Indian, Chinese, Bakery, Continental, and many more.</p>
                <p>Here you can find some of our best items served with love!</p>
            </div>
            <div className="items">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h3 className="item-name">{item.name}</h3>
                            <p className="item-description">{item.description}</p>
                            <p className="item-price">{item.price}</p>
                            <button className="order-button" onClick={handleOrderNow}>Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='end'>
                <h4>
                    And many more...
                </h4>
                <h3>Download the app to order you favourite HOMEAL now!! <span>
                    <button className="btn btn-outline-dark" onClick={handleOrderNow}>Download Now</button>
                </span></h3>
            </div>
        </div>
    );
};

export default Products;