import { Link } from 'react-router-dom';

const AccountList = () => (
	<div className="nozama-account-list text-white">
		<Link to="/ap/signin/">
			<span>Hello, sign in</span>
			<h5>Account & Lists</h5>
		</Link>
	</div>
)

export default AccountList;
