import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { request } from '@utils/request';
import Loading from '@components/Loading';
import { crud } from '@store/crud/actions';
import useOnFetch from '@utils/hooks/useOnFetch';
import { useCrudContext } from '@store/context/crud';
import { selectUpdatedItem } from '@store/crud/selectors';

const UpdatePassword = ({ config }) => {
	const dispatch = useDispatch();

	const { current } = useSelector(selectUpdatedItem);

	const { state, crudContextAction } = useCrudContext();

	const [ form ] = Form.useForm();

	const { onFetch, result, isLoading, isSuccess } = useOnFetch();

	const handelSubmit = (fieldsValue) => {
		const entity = 'admin/password-update/' + current._id;
		const updateFn = () => {
			return request.patch({ entity, jsonData: fieldsValue });
		};

		onFetch(updateFn);
	};

	/////

	const { readBox } = crudContextAction;

	const showCurrentRecord = () => {
		readBox.open();
	};

	React.useEffect(() => {
		if (isSuccess) {
			form.resetFields();
			dispatch(crud.resetAction({ actionType: 'update' }));
		}
	}, [ isSuccess ]);

	const { isAdvancedBoxOpen } = state;

	const show = isAdvancedBoxOpen
		? { display: 'block', opacity: 1 }
		: { display: 'none', opacity: 0 };

	return (
		<div style={show}>
			<Loading isLoading={isLoading}>
				<h3>Update Password</h3>
				<div className="space10"></div>
				<Form form={form} layout="vertical" onFinish={handelSubmit}>
					<Form.Item
						label="New Password"
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your Password!',
								len: 8,
							},
						]}
					>
						<Input.Password autoComplete="new-password" />
					</Form.Item>
					<Form.Item
						style={{
							display: 'inline-block',
							paddingRight: '5px',
						}}
					>
						<Button type="primary" htmlType="submit">
							Save
						</Button>
					</Form.Item>
					<Form.Item
						style={{
							display: 'inline-block',
							paddingLeft: '5px',
						}}
					>
						<Button onClick={showCurrentRecord}>Cancel</Button>
					</Form.Item>
				</Form>
			</Loading>
		</div>
	);
}

export default UpdatePassword;
