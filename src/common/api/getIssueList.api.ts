import { githubApiInstance } from 'common/utils/axiosInstance';
import { GetIssueListResponse } from 'common/types/issue.type';

export interface GetIssueListApiProps {
	perPage?: number;
	page: number;
	q?: string;
}

export default async function getIssueListApi({
	perPage = 10,
	page,
	q = 'is:issue repo:angular/angular-cli sort:comments-desc',
}: GetIssueListApiProps) {
	const { data } = await githubApiInstance.get<GetIssueListResponse>('/search/issues', {
		params: { q, per_page: perPage, page },
	});

	return data;
}
