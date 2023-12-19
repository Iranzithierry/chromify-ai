import React from 'react';
import Image, { ImageProps } from 'next/image';

interface StyledImageProps {
    Size: 'sm' | 'default';
    Src?: string;
    CustomSize?: string | null;
    classNames?: string;
}

const StyledImage: React.FC<StyledImageProps> = ({ Size, Src, CustomSize = null, classNames }) => {
    const keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    const triplet = (e1: number, e2: number, e3: number) =>
        keyStr.charAt(e1 >> 2) +
        keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
        keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
        keyStr.charAt(e3 & 63);

    const rgbDataURL = (r: number, g: number, b: number) =>
        `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
        }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

    const imageSize = Size === 'sm' ? 'h-10 w-10 sm:h-12 sm:w-12 md:h-[55px] md:w-[55px]' : 'h-16 w-16 md:h-[80px] md:w-[80px]';

    return (
        <Image
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL={rgbDataURL(0, 105, 255)}
            src={Src || '/logo.png'}
            alt="Logo"
            className={`object-cover ${CustomSize ? CustomSize : imageSize} rounded-full ${classNames}`}
            decoding='async'
        />
    );
};

export default StyledImage;
