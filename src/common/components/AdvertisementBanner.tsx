/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface AdvertisementBannerProps {
	href?: string;
	src?: string;
	alt?: string;
}

export default function AdvertisementBanner({
	href = 'https://thingsflow.com/ko/home',
	src = 'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7',
	alt = 'ad',
}: AdvertisementBannerProps) {
	return (
		<a href={href} css={containerSt}>
			<img src={src} alt={alt} css={imgSt} />
		</a>
	);
}

const containerSt = css`
	width: fit-content;
	height: fit-content;
`;

const imgSt = css`
	object-fit: contain;
`;
