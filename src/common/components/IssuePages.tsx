/** @jsxImportSource @emotion/react */

import { ReactNode, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

import useGetIssueListQuery from 'common/hooks/useGetIssueListQuery';
import LoadingIssueListNotice from 'common/components/LoadingIssueListNotice';
import IssueItem from 'common/components/IssueItem';
import AdvertisementBanner from 'common/components/AdvertisementBanner';
import { useAppSelector } from 'common/redux/store';

export default function IssuePages() {
	const { page } = useAppSelector(state => state.page);

	const containerRef = useRef<HTMLDivElement>(null);

	const [nodes, setNodes] = useState<ReactNode[]>([]);

	const { isFetchingNextPage, isSuccess } = useGetIssueListQuery({
		onSuccess: data => {
			if (data) {
				setNodes(prevState => [
					...prevState,
					data.items.map(item => <IssueItem key={item.id} {...item} />),
					<AdvertisementBanner key={`${page}-banner`} />,
				]);
			}
		},
	});

	useEffect(() => {
		if (isFetchingNextPage) {
			setNodes(prevState => [...prevState, <LoadingIssueListNotice key={`${page}-notice`} />]);
		}
	}, [isFetchingNextPage, page]);

	useEffect(() => {
		if (page === 0) {
			setNodes([]);
		}
	}, [page]);

	useEffect(() => {
		if (containerRef && containerRef.current && !isFetchingNextPage && isSuccess) {
			containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}
	}, [isFetchingNextPage, isSuccess, containerRef]);

	return (
		<div css={containerSt} ref={containerRef}>
			<div css={itemContainerSt}>{nodes.map(node => node)}</div>
		</div>
	);
}

const containerSt = css`
	display: flex;
	align-items: center;
	justify-content: center;

	flex-direction: column;
	gap: 16px;
`;

const itemContainerSt = css`
	width: 100%;

	padding: 16px;

	max-width: 500px;
	height: fit-content;

	display: flex;
	flex-direction: column;
	gap: 8px;
`;
