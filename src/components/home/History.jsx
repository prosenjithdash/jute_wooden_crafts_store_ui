
const History = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2024/3/395458938/LU/VB/SW/122111757/wood-crafts.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        {/* <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span> */}
                        <h3 className="text-3xl font-bold">Wooden Crafts.</h3>
                        <p className="my-6 dark:text-gray-600">Wooden crafts include furniture, toys, kitchen utensils, and decorative items like sculptures and picture frames. Techniques such as carving, turning, and inlay enhance their beauty and durability. These crafts are cherished for their natural aesthetic, practicality, and the skilled craftsmanship involved in their creation.</p>
                        <button type="button" className="self-start px-8 py-3 font-semibold rounded-full dark:bg-gray-800 text-gray-100 bg-yellow-700">Shop Now</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://img1.exportersindia.com/product_images/bc-full/2022/10/6759101/4--1667192-1667192684_6603510_1698194.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        {/* <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span> */}
                        <h3 className="text-3xl font-bold">Jute Crafts.</h3>
                        <p className="my-6 dark:text-gray-600">
                            Jute crafts involve making decorative and functional items from natural jute fiber, known for its eco-friendliness and sustainability. Popular jute crafts include bags, rugs, mats, wall hangings, baskets, and accessories. Techniques used include weaving, braiding, knitting, and macramé. Jute crafts are valued for their rustic charm, durability, and environmental benefits.</p>
                        <button type="button" className="self-start px-8 py-3 font-semibold rounded-full dark:bg-gray-800 text-gray-100 bg-yellow-700">Shop Now</button>
                        
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default History;