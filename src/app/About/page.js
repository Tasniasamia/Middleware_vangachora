import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <div>
            About Us
            <Image
                src="https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?w=740&t=st=1700284459~exp=1700285059~hmac=fb21ff8cac22cfae9957e6ec5cbe14780d40923c35404a00c1673b7657669c61" // Replace with the actual image URL
                alt="samia"
                height={200}
                width={200}
                placeholder="blur"
                blurDataURL="data:image/png;base64,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
"
                // layout="responsive"
                priority
            /><br/>
            <Image
                src="https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?w=740&t=st=1700284459~exp=1700285059~hmac=fb21ff8cac22cfae9957e6ec5cbe14780d40923c35404a00c1673b7657669c61" // Replace with the actual image URL
                alt="samia"
                height={200}
                width={200}
                placeholder="blur"
                blurDataURL="data:image/png;base64,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
"                priority
            /><br/>

            <Image
                src="https://img.freepik.com/premium-photo/positive-female-model-with-cheerful-look-dressed-casually-indicates-with-thumb-blank_176532-3286.jpg?size=626&ext=jpg&ga=GA1.1.1048695696.1700284430&semt=ais" // Replace with the actual image URL
                alt="samia"
                height={200}
                width={200}
                layout="responsive"
                placeholder="blur"
                blurDataURL="data:image/png;base64,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
"                priority
            />
        </div>
    );
};

export default Page;
