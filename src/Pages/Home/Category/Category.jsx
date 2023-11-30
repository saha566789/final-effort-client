import { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import CategoryCard from "./CategoryCard";


const Category = () => {
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        fetch('https://final-effort-server-pi.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <SectionTittle 
            heading="Categories"
            subHeading="selling product">

            </SectionTittle>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10'>
                {
                    categories?.map(category=><CategoryCard
                    key={category.id}
                    category={category}
                    ></CategoryCard> )
                }
            </div>
        </div>
    );
};

export default Category;