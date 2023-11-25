

const CategoryCard = ({category}) => {
    const {name,image} = category
    return (
        <div className="card card-compact ml-7 w-[600px] bg-base-100 shadow-xl">
        <figure><img className="h-40 w-96" src={image} alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title text-red-700">{name}</h2>
        </div>
      </div>
    );
};

export default CategoryCard;