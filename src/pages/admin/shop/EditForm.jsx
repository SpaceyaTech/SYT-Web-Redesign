import React from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, X } from 'lucide-react';
import DragDropImage from '../../../assets/images/Drag and drop.png';
import { twMerge } from 'tailwind-merge';

const EditForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='grid p-[32px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='grid'>
                <div className='grid w-full sm:space-x-[18px] space-y-[20px] sm:space-y-0 sm:grid-cols-2'>
                    <div className='grid w-full'>
                        {/* edit box */}
                        <div className='w-full flex items-center justify-between text-[31px] font-[500] text-[#353535]'>
                            <div>
                                <span>Edit Item </span>
                            </div>
                            <div>
                                <span><X className='h-[40px] w-[40px]' /></span>
                            </div>
                        </div>
                        {/* border div */}
                        <div className='border-[1px] border-[#D0D0D0] mt-[23px]'></div>
                        {/* input */}
                        <div className='grid mt-[24px] space-y-[4px]'>
                            <div className='grid space-y-[14px]'>
                                <div className='grid space-y-[4px]'>
                                    <div>
                                        <Label>Price</Label>
                                    </div>
                                    <div className='grid items-center'>
                                        <input
                                            type="text"
                                            placeholder='KES 0.00'
                                            {...register('price', { required: 'Price is required' })}
                                            className='rounded-[6px] py-[9px] px-[13px] w-full border-[1px] border-[#D1D5DB] placeholder:text-[#6B7280] placeholder:font-[400] placeholder:text-[14px]'
                                        />
                                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                                    </div>
                                </div>
                                <div className='grid space-y-[4px]'>
                                    <div>
                                        <Label>Size</Label>
                                    </div>
                                    <OptionSelection>
                                        <Select {...register('size', { required: 'Size is required' })}>
                                            <option value="" disabled selected>Select Size</option>
                                            <Option>Small</Option>
                                            <Option>Medium</Option>
                                            <Option>Large</Option>
                                            <Option>XL</Option>
                                        </Select>
                                        {errors.size && <span className="text-red-500 text-sm">{errors.size.message}</span>}
                                    </OptionSelection>
                                </div>
                                <div className='grid space-y-[4px]'>
                                    <div>
                                        <Label>Color</Label>
                                    </div>
                                    <OptionSelection another="true">
                                        <Select {...register('color', { required: 'Color is required' })}>
                                            <option value="" disabled selected>Select Color</option>
                                            <Option>Red</Option>
                                            <Option>Green</Option>
                                            <Option>Blue</Option>
                                            <Option>Purple</Option>
                                        </Select>
                                        {errors.color && <span className="text-red-500 text-sm">{errors.color.message}</span>}
                                    </OptionSelection>
                                </div>
                                <div className='grid space-y-[4px]'>
                                    <div>
                                        <Label>Description</Label>
                                    </div>
                                    <div className='grid'>
                                        <textarea
                                            {...register('description', { required: 'Description is required' })}
                                            className='h-[115px] resize-none rounded-[6px] py-[9px] px-[13px] w-full border-[1px] border-[#D1D5DB] placeholder:text-[#6B7280] placeholder:font-[400] placeholder:text-[14px]'
                                        />
                                        {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid w-full justify-end sm:pr-[18px] items-end'>
                        <a href="#">
                            <img src={DragDropImage} className='w-full h-full' />
                        </a>
                    </div>
                </div>
                <div className='flex w-full justify-end'>
                    <div className='flex justify-center items-center space-x-[24px] py-[32px]'>
                        <div>
                            <EditButton type="button">Cancel</EditButton>
                        </div>
                        <div>
                            <EditButton type="submit">Edit</EditButton>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditForm;

const Label = ({ children }) => {
    return (
        <label className='font-[400] text-[13px] text-[#4C4D4D]'>{children}</label>
    );
};

const OptionSelection = ({ children, another = false }) => {
    return (
        <>
            {another === "true" ? children :
                <div className='relative flex items-center'>
                    <Select>
                        <option value="" disabled selected>Select Size</option>
                        <Option>Small</Option>
                        <Option>Medium</Option>
                        <Option>Large</Option>
                        <Option>XL</Option>
                    </Select>
                    <div className='absolute w-[20px] h-[20px] text-[#6B7280] right-[13px]'>
                        <ChevronDown />
                    </div>
                </div>
            }
        </>
    );
};

const Select = ({ children, ...props }) => {
    return (
        <select
            {...props}
            style={{
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
            }}
            className="rounded-[6px] py-[9px] px-[13px] w-full border-[1px] border-[#D1D5DB] text-[#6B7280] font-[400] text-[14px]"
        >
            {children}
        </select>
    );
};

const Option = ({ children = "Small" }) => {
    return (
        <>
            <option value={children}>{children}</option>
        </>
    );
};

const EditButton = ({ children = "Cancel", ...props }) => {
    const difBtn = children !== "Cancel" && "bg-[#009975] text-white";
    return (
        <>
            <button
                {...props}
                className={twMerge("font-[500] text-[13px] text-[#009975] px-[32px] py-[12px] border-[2px] border-[#009975] rounded-[8px]", difBtn)}
            >
                {children}
            </button>
        </>
    );
};
