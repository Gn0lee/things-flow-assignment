import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import getIssueApi from 'common/api/getIssue.api';

export default function useGetIssueQuery() {
	const { issueNumber } = useParams();

	return useQuery({
		queryKey: ['issue', issueNumber],
		queryFn: () => getIssueApi({ number: Number(issueNumber) }),
		enabled: !!issueNumber,
	});
}
