import { useInfiniteQuery } from 'react-query';

import getIssueListApi from 'common/api/getIssueList.api';
import { useAppSelector } from 'common/redux/store';
import { GetIssueListResponse } from 'common/types/issue.type';

export default function useGetIssueListQuery(props?: { onSuccess?: (data?: GetIssueListResponse) => void }) {
	const { page } = useAppSelector(state => state.page);

	return useInfiniteQuery('issueList', ({ pageParam = 1 }) => getIssueListApi({ page: pageParam }), {
		enabled: page > 0,
		getNextPageParam: () => {
			return page;
		},
		onSuccess: data => {
			if (props?.onSuccess) {
				props.onSuccess(data.pages.at(-1));
			}
		},
	});
}
