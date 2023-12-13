import { useSelector } from 'react-redux';
import { EditOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Descriptions, Divider, PageHeader, Row, Space, Tag } from 'antd';

import config from '@/config';
import history from '@/utils/history';
import uniqueId from '@/utils/uinqueId';
import photo from '@/style/images/photo.png';
import { selectUser } from '@/redux/auth/selectors';
import { useProfileContext } from '@/context/profileContext';
import { selectCurrentItem, selectReadItem } from '@/redux/crud/selectors';

const AdminInfo = ({ config }) => {
	const { profileContextAction } = useProfileContext();
	const { modal, updatePanel } = profileContextAction;
	const { ENTITY_NAME } = config;

	const currentAdmin = useSelector(selectUser);
	const { result } = useSelector(selectCurrentItem);

	return (
		<>
			<PageHeader
				onBack={() => window.history.back()}
				title={ENTITY_NAME}
				ghost={false}
				extra={[
					<Button
						key={`${uniqueId()}`}
						onClick={() => {
							updatePanel.open();
						}}
						type="primary"
						icon={<EditOutlined />}
					>
						Edit
					</Button>,
					<Button
						key={`${uniqueId()}`}
						icon={<LockOutlined />}
						onClick={() => {
							modal.open();
						}}
					>
						Update Password
					</Button>,
				]}
				style={{
					padding: '20px 0px',
				}}
			/>
			<Row align="middle">
				<Col xs={{ span: 24 }} sm={{ span: 7 }} md={{ span: 5 }}>
					<img
						className="last left circle pad5"
						src={`${config.api.base_url}${currentAdmin?.photo}`}
						style={{
							width: '100px',
							height: '100px',
							border: '2px solid #1B98F5',
						}}
						alt={`${currentAdmin?.name}`}
					/>
				</Col>
				<Col xs={{ span: 24 }} sm={{ span: 18 }}>
					<Descriptions labelStyle={{ fontSize: '17px' }} size="small">
					<Descriptions.Item label="Name" span="3" style={{ paddingTop: '20px' }}>
						<h3
							style={{
								color: '#22075e',
								textTransform: 'capitalize',
							}}
						>
							{result?.name}
						</h3>
					</Descriptions.Item>
					<Descriptions.Item label="Surname" span="3">
						<h3
							style={{
								color: '#22075e',
								textTransform: 'capitalize',
							}}
						>
							{result?.surname}
						</h3>
					</Descriptions.Item>
					<Descriptions.Item label="Email" span="3" style={{ paddingTop: '20px' }}>
						<h3
							style={{
								color: '#22075e',
							}}
						>
								{result?.email}
							</h3>
						</Descriptions.Item>
						<Descriptions.Item label="Role" span="3">
							<h3
								style={{
									color: '#22075e',
									textTransform: 'capitalize',
								}}
							>
								{result?.role}
							</h3>
						</Descriptions.Item>
					</Descriptions>
				</Col>
			</Row>
			<Divider />
			<Button
				key={`${uniqueId()}`}
				icon={<LogoutOutlined />}
				className="right"
				onClick={() => history.push('/logout')}
			>
				Logout
			</Button>
		</>
	);
};

export default AdminInfo;
