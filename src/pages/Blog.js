import React from 'react';
import './Blog.css';
import Card from '../components/Card';
import food from '../images/food.svg';
import skyscraper from '../images/skyscraper.svg';
import paris from '../images/paris.svg';
import adventure from '../images/adventure.svg';
import boat from '../images/boat.svg';
import desert from '../images/desert.svg';

function Blog() {
    return (
        <div className="Blog">
            <div className="Card_container_one">
                <Card title="The best restaurants in Rome" img={food} description="Find hidden culinary gems in the heart of Rome"/>
                <Card title="Breathtaking views from New York skycrapers" img={skyscraper} description="Discover the top 5 skyscrapers in New York"/>
                <Card title="Must do activities in Paris" img={paris} description="From bakeries to boutiques, immerse yourself in Parisian culture"/>
                <Card title="Adventure awaits in the Swiss mountains" img={adventure} description="Only for the brave... those who seek adventure in Zermatt"/>
                <Card title="Boat riding in the mediterranean" img={boat} description="Explore the depths of the sea whilst island hopping"/>
                <Card title="Climb the pyramids of Giza" img={desert} description="Take a trip to the Pyramids of Giza, built 4500 years ago"/>
            </div>

            
        </div>
    )
};

export default Blog;
