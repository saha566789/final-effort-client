

const CreateShop = () => {
    const handleAddProduct = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, image, quantity, author, category, rating, description }
        console.log(newProduct)
       
    }
    return (
        <div className="bg-[#F4F3F0] lg:p-24">
        <h2 className="lg:text-3xl text-xl font-extrabold">Create a shop</h2>
        <form onSubmit={handleAddProduct}>
            {/* form name and image row */}
            <div className="md:flex  mb-8">
                <div className="form-control   md:w-1/2">
                    <label className="label">
                        <span className="label-text">Shop Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="Shop Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Shop Logo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="image" placeholder="Shop Logo" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form  row-2 */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="author" placeholder="Author" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form  row-3 */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label  className="input-group">
                        <select type="text" name="category"  className="select select-bordered w-full">
                        <option disabled selected>Category</option>
                            <option>Novel</option>
                            <option>History</option>
                            <option>Sci-Fi</option>
                            <option>Drama</option>
                        </select>
                      
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form  row-4 */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="description" placeholder="short Description" className="input input-bordered w-full" />
                    </label>
                </div>

            </div>
            <input type="submit" value="Add Book" className="btn btn-block bg-slate-800 text-white " />
        </form>
    </div>
    );
};

export default CreateShop;