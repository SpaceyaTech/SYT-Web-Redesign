import { ListFilter, MoveLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import SingleItemImage from '../../../assets/images/singleItemImage.png';
import smallImageOne from '../../../assets/images/smallSingle.png';
import smallImageTwo from '../../../assets/images/smallSingleTwo.png';
import { twMerge } from 'tailwind-merge';

// Main component for the single page view
const SinglePageView = () => {
    return (
        <div className='grid  p-[42px]'>
            {/* Header Section */}
            <div className='grid  justify-between sm:grid-cols-2   items-center gap-[16px]'>
                {/* Left Side Content */}
                <div className='grid items-center'>
                    {/* Back Button */}
                    <Link to="/">
                        <div className='flex items-center space-x-[8px]'>
                            <span>
                                <MoveLeft height="20" width="20" />
                            </span>
                            <span className='font-[500] text-[13px]'>
                                BACK
                            </span>
                        </div>
                    </Link>
                    {/* Stock Status */}
                    <div className='pt-[24px] max-w-[80px]'>
                        <div className='grid justify-center items-center px-[12px] py-[2px] text-[14px] font-[500px] text-[#065F46] bg-[#D1FAE5] rounded-[12px]'>
                            In Stock
                        </div>
                    </div>
                    {/* Product Title */}
                    <div className='flex pt-[4px]'>
                        <div className='pt-[4px] flex items-center text-[31px] font-[500]'>
                            SpaceYaTech Hoodie
                        </div>
                    </div>
                    {/* Product Description */}
                    <div className='flex pt-[16px]'>
                        <div className='flex items-center font-[400] text-[15px] max-w-[577px]'>
                            Our Iconic T-Shirt is crafted with meticulous attention to detail, using superior materials that ensure durability and long-lasting performance. It's a wardrobe investment that will continue to impress you with its impeccable construction and ability to withstand the test of time.
                        </div>
                    </div>
                    {/* Available Sizes */}
                    <div className='grid items-center pt-[31px]'>
                        <div className='text-[16px] font-[400] text-[#353535]'>Available Sizes</div>
                        <div className='flex gap-x-[8px] pt-[16px]'>
                            <SizeBatch />
                            <SizeBatch size='m' />
                            <SizeBatch size='l' />
                            <SizeBatch size='xl' />
                        </div>
                    </div>
                </div>

                {/* Product Images */}
                <div className='grid  sm:justify-end'>
                    <div className='flex items-center gap-[16px]'>
                        <div className='flex items-center'>
                            <img src={SingleItemImage} alt="Single Item" />
                        </div>
                        <div className='grid items-center gap-[16px]'>
                            <SmallPhoto />
                            <SmallPhoto url={smallImageTwo} />
                            <SmallPhoto url={smallImageTwo} />
                            <SmallPhoto />
                        </div>
                    </div>
                </div>

            </div>

            {/* Inventory Information Section */}
            <div className='pt-[42px]'>
                <div className='grid w-full border-[1px] border-[#D0D0D0] rounded-[12px] overflow-auto font-poppins'>
                    {/* Inventory Header */}
                    <div className='font-[600] px-[12px] text-[16px] text-[#4C4D4D] h-[48px] flex justify-between items-center'>
                        <div className='flex space-x-[8px] items-center text-nowrap'>
                            <span>Inventory Information</span>
                            <span className='text-[14px] py-[2px] px-[12px] bg-[#D1FAE5] rounded-[12px] text-[#065F46]'>
                                {innerData.length + " items"}
                            </span>
                        </div>
                        <div className='cursor-pointer'>
                            <button className='flex items-center rounded-[6px] text-[14px] font-[500] py-[9px] px-[17px] gap-[8px] border-[1px] border-[#D1D5DB]'>
                                <span>Filter</span>
                                <span><ListFilter height={20} width={20} /></span>
                            </button>
                        </div>
                    </div>

                    {/* Inventory Table */}
                    <div className="w-full overflow-x-auto">
                        <div className="flex flex-col min-w-0 break-words w-full">
                            <div className="block w-full overflow-x-auto">
                                <table className="items-center bg-transparent w-full border-collapse">
                                    <thead className='w-full'>
                                        <tr>
                                            {dataTableData.map((e, index) => (
                                                <th key={index} className="font-[400] text-[13px] text-[#6B7280] px-6 h-[44px] bg-[#F9FAFB] align-middle uppercase whitespace-nowrap text-left">
                                                    {e.text}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {innerData.map((e, index) => (
                                            <tr key={index} className='text-[14px] text-[#7E8180] font-[500] align-middle even:bg-[#F9FAFB]'>
                                                <th className="h-[52px] font-[500] px-6 text-nowrap">
                                                    {e.id}
                                                </th>
                                                <td className="h-[52px] px-6">
                                                    <div className={twMerge("h-[40px] w-[40px] rounded-full", e.color)}>
                                                    </div>
                                                </td>
                                                <td className="h-[52px] px-6">
                                                    {e.size}
                                                </td>
                                                <td className="h-[52px] px-6 text-center">
                                                    {e.totalItems}
                                                </td>
                                                <td className="h-[52px] px-6 text-center">
                                                    {e.unitCost}
                                                </td>
                                                <td className="h-[52px] px-6 text-center">
                                                    {e.itemsSold}
                                                </td>
                                                <td className="h-[52px] px-6 text-center">
                                                    {e.itemsRemaining}
                                                </td>
                                                <td className="h-[52px] px-6 text-right space-x-[16px] pr-[12px] text-nowrap">
                                                    <span className='text-[#009975] cursor-pointer'>Edit</span>
                                                    <span className='text-[#7E8180] cursor-pointer'>Remove</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SinglePageView;

// SizeBatch Component
const SizeBatch = ({ size = "s" }) => {
    return (
        <div className='flex items-center justify-center uppercase border-[1px] py-[5px] px-[20px] rounded-[48px] bg-[#F7F7F7] border-[#7B7B7B]'>
            <span className='text-[16px] font-[400] text-[#191A1A]'>{size}</span>
        </div>
    );
};

// SmallPhoto Component
const SmallPhoto = ({ url = smallImageOne }) => {
    return (
        <div className='flex justify-center items-center'>
            <img src={url} alt="Small Item" />
        </div>
    );
};

// Table Headers Data
const dataTableData = [
    { text: "ITEM ID" },
    { text: "COLOR" },
    { text: "SIZE" },
    { text: "TOTAL ITEMS" },
    { text: "UNIT COST" },
    { text: "ITEMS SOLD" },
    { text: "ITEMS REMAINING" },
    { text: "" }
];

// Table Rows Data
const innerData = [
    { id: "ITM-101", color: "bg-[#A45A41]", size: "S", totalItems: 5, unitCost: 1500, itemsSold: 2, itemsRemaining: 0 },
    { id: "ITM-102", color: "bg-[#7B7B7B]", size: "S", totalItems: 5, unitCost: 1500, itemsSold: 3, itemsRemaining: 2 },
    { id: "ITM-103", color: "bg-[#A45A41]", size: "M", totalItems: 5, unitCost: 1500, itemsSold: 1, itemsRemaining: 3 },
    { id: "ITM-104", color: "bg-[#7B7B7B]", size: "M", totalItems: 5, unitCost: 1500, itemsSold: 5, itemsRemaining: 1 },
    { id: "ITM-105", color: "bg-[#A45A41]", size: "M", totalItems: 5, unitCost: 1500, itemsSold: 5, itemsRemaining: 5 },
    { id: "ITM-106", color: "bg-[#7B7B7B]", size: "L", totalItems: 5, unitCost: 1500, itemsSold: 6, itemsRemaining: 4 },
    { id: "ITM-107", color: "bg-[#A45A41]", size: "L", totalItems: 5, unitCost: 1500, itemsSold: 1, itemsRemaining: 6 },
    { id: "ITM-108", color: "bg-[#7B7B7B]", size: "XL", totalItems: 5, unitCost: 1500, itemsSold: 0, itemsRemaining: 7 },
];
// done