
const Faq = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
               
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What materials are used in your wooden and jute crafts?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">We use high-quality, eco-friendly materials for all our crafts. Our wooden items are made from sustainably sourced wood, while our jute products are crafted from natural jute fiber, known for its durability and biodegradability.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I care for and maintain wooden and jute products?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">To maintain wooden items, avoid direct sunlight and moisture, and clean with a dry or slightly damp cloth. For jute products, spot clean with a damp cloth and mild soap, and avoid prolonged exposure to moisture to prevent mold and mildew.

</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Are your products handmade?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, all our products are handcrafted by skilled artisans. Each piece is unique, showcasing traditional techniques and craftsmanship. </p>
                    </details>

                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do you offer custom designs or personalization?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, we offer custom designs and personalization for many of our products. Contact us with your specific requirements, and we will work with you to create a unique item tailored to your preferences.

                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Are your products environmentally friendly?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Absolutely. Both our wooden and jute products are made from sustainable, eco-friendly materials. We prioritize sustainability and environmental responsibility in our crafting processes. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;