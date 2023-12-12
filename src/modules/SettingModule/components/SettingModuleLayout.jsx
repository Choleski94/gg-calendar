import { PlusOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, PageHeader, Upload } from 'antd';

import uniqueId from '@utils/uinqueId';

import UpdatelSettingForm from './UpdatelSettingForm';

const SettingModuleLayout = ({ config, children }) => (
	<>
		<PageHeader
			title={config.SETTINGS_TITLE}
			ghost={false}
			extra={[
				<Button key={`${uniqueId()}`} type="primary" disabled icon={<SyncOutlined />}>
					Update
				</Button>,
			]}
			style={{
				padding: '20px 0px',
			}}
		/>
		<Divider />
		<UpdatelSettingForm config={config}>
			{children}
		</UpdatelSettingForm>
	</>
);

export default SettingModuleLayout;
