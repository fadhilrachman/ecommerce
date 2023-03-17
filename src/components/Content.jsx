import React from "react";

const Content = () => {
    return (
        // Content 1
        <section className="grid grid-cols-11 grid-flow-col py-2 h-[650px] gap-2.5">

        {/* Image1 */}
            <div className="flex flex-col col-start-1 col-end-6 row-span-6 justify-center items-start gap-3 px-20 bg-[#FBE3D7]">
                <h1 className="font-bold text-4xl font-josefin">Women's Fashion</h1>           
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam quasi reiciendis deserunt labore impedit perferendis illum rem non inventore qui ipsam natus ex repellendus,</p>
                <a className="border-b-2 font-bold border-red-500" href="/">Shop Now</a>
            </div>

        {/* Image2 */}
            <div className="flex flex-col justify-center items-start px-12 col-span-3 row-span-3 gap-3 bg-[#BDE2D8]">
                <h1 className="font-bold text-2xl ">Men's Fashion</h1>
                <p>items</p>
                <a className="border-b-2 font-bold border-red-500" href="/">Shop Now</a>
            </div>

        {/* Image3 */}
            <div className="flex flex-col justify-center items-start px-12 col-span-3 row-span-3 gap-3 bg-[#FCDCE1]">
                <h1 className="font-bold text-2xl ">Kid's Fashion</h1>
                <p>items</p>
                <a className="border-b-2 font-bold border-red-500" href="/">Shop Now</a>
            </div>
        
        {/* Image4 */}
            <div className="flex flex-col justify-center items-start px-12 col-span-3 row-span-3 gap-3 bg-[#D4D4EE]">
                <h1 className="font-bold text-2xl ">Cosmetics</h1>
                <p>items</p>
                <a className="border-b-2 font-bold border-red-500" href="/">Shop Now</a>
            </div>
        
        {/* Image5 */}
            <div className="flex flex-col justify-center items-start px-12 col-span-3 row-span-3 gap-3 bg-[#CCE3F5]">
                <h1 className="font-bold text-2xl ">Accessories</h1>
                <p>items</p>
                <a className="border-b-2 font-bold border-red-500" href="/">Shop Now</a>
            </div>
        </section>
    );
};

export default Content;
