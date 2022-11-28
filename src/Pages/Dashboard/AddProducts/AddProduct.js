import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const [brands, setBrands] = useState('');
    const navigate = useNavigate();
    const handleNewProduct = e => {
        e.preventDefault();

        const form = e.target;
        const variant = form.variant.value;
        const model = form.model.value;
        const condition = form.condition.value;
        const description = form.description.value;
        const purchaseYear = form.purchaseYear.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const status = form.status.value;
        const yearsOfUse = form.yearsOfUse.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const sellerPhone = form.sellerPhone.value;
        const sellerLocation = form.sellerLocation.value;
        const date = form.date.value;
        const img = form.image.files[0];

        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBB_key}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const photo = imageData.data.display_url;
                const product = {
                    variant,
                    model,
                    condition,
                    description,
                    purchaseYear,
                    originalPrice,
                    resalePrice,
                    status,
                    yearsOfUse,
                    sellerName,
                    sellerEmail,
                    sellerPhone,
                    sellerLocation,
                    date,
                    image: photo
                }
                fetch(`${process.env.REACT_APP_server}/new-product?brands=${brands}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        toast.success('Product Successfully Added', {duration: 3000});
                        form.reset();
                        navigate('/dashboard/my-products');
                    }
                })
            })
    }

    return (
        <div className='mt-10'>
            <h3 className='text-center text-xl font-bold text-cyan-500'>Add New Product</h3>
            <div className='flex flex-col'>
                <form onSubmit={handleNewProduct} className='mx-12 mt-5 space-y-3'>
                    <div className='flex justify-center gap-3'>
                        <select required name='brand' onChange={e => setBrands(e.target.value)} className="select select-bordered border-black w-1/2">
                            <option>apple</option>
                            <option>samsung</option>
                            <option>xiaomi</option>
                            <option>vivo</option>
                            <option>oppo</option>
                            <option>techno</option>
                        </select>
                        <input required name='model' type="text" placeholder="model" className="input input-bordered border-black w-full" />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <select required name='variant' className="select select-bordered border-black w-1/2">
                            <option>4/64</option>
                            <option>6/128</option>
                            <option>8/128</option>
                            <option>8/256</option>
                            <option>12/256</option>
                            <option>12/512</option>
                        </select>
                        <select required name='condition' className="select select-bordered border-black w-1/2">
                            <option>fair</option>
                            <option>good</option>
                            <option>excellent</option>
                        </select>
                    </div>
                    <div className='flex justify-center gap-3'>
                        <input required name='description' type="text" placeholder="description" className="input input-bordered border-black w-full" />
                        <input required name='purchaseYear' type="text" placeholder="purchase year" className="input input-bordered border-black w-full" />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <input required name='originalPrice' type="text" placeholder="original price (BDT)" className="input input-bordered border-black w-full" />
                        <input required name='resalePrice' type="text" placeholder="resale price (BDT)" className="input input-bordered border-black w-full" />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <input required name='status' type="text" placeholder="status" defaultValue="available" disabled className="input input-bordered border-black w-full" />
                        <input required name='yearsOfUse' type="text" placeholder="years of use" className="input input-bordered border-black w-full" />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <input required name='sellerName' type="text" disabled defaultValue={user?.displayName} placeholder="your name" className="input input-bordered border-black w-full" />
                        <input required name='sellerEmail' type="text" disabled defaultValue={user?.email} placeholder="your email" className="input input-bordered border-black w-full" />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <input required name='sellerPhone' type="text" placeholder="your phone number" className="input input-bordered border-black w-full" />
                        <input required name='sellerLocation' type="text" placeholder="your location" className="input input-bordered border-black w-full" />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <input required name='date' type="date" placeholder="mm/dd/yyyy" className="input input-bordered border-black w-full" />
                        <input required name='image' type="file" accept='image/*' className="file-input file-input-bordered border-black w-full" />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <input type="submit" className="btn btn-primary w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;