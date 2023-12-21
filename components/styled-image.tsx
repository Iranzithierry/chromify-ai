import React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface StyledImageProps {
    height?: number;
    width?: number;
    size: string | 'sm';
    alt?: string;
    src?: string | null | undefined;
    classNames?: string;
}

const StyledImage: React.FC<StyledImageProps> = ({
    height,
    width,
    size, 
    alt, 
    src, 
    classNames, 
    ...props 
}) => {
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

    let imageSize;
    switch (size) {
        case 'xs':
            imageSize = 'h-6 w-6 sm:h-8 sm:w-8 md:h-[40px] md:w-[40px]';
            break;
        case 'sm':
            imageSize = 'h-10 w-10 sm:h-12 sm:w-12 md:h-[55px] md:w-[55px]';
            break;
        case 'md':
            imageSize = 'h-16 w-16 md:h-[80px] md:w-[80px]';
            break;
        default:
            imageSize = size;
    }

    return (
        <Image
            width={height ?? 100}
            height={width ?? 100}
            placeholder="blur"
            blurDataURL={rgbDataURL(0, 105, 255)}
            src={src || `/${process.env.APP_LOGO_PATH}`}
            alt={alt || 'Logo'}
            className={cn(
                `object-cover ${imageSize} rounded-full`,
                classNames
            )}
            decoding='async'
            {...props}
        />
    );
};

export default StyledImage;
