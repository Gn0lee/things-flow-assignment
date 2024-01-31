import { githubApiInstance } from 'common/utils/axiosInstance';
import { IssueInfo } from 'common/types/issue.type';

export interface GetIssueApiProps {
	owner?: string;
	repo?: string;
	number: number;
}

export default async function getIssueApi({ owner = 'angular', repo = 'angular-cli', number }: GetIssueApiProps) {
	const { data } = await githubApiInstance.get<IssueInfo>(`/repos/${owner}/${repo}/issues/${number}`);

	return data;
}
