import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { crud } from '@/redux/crud/actions';
import { selectUser } from '@/redux/auth/selectors';
import { useProfileContext } from '@/context/profileContext';

import AdminInfo from './AdminInfo';
import UpdateAdmin from './UpdateAdmin';
import PasswordModal from './PasswordModal';

const Visibility = ({ isVisible, children }) => {
	const show = isVisible ? ({
		display: 'block', 
		opacity: 1
	}) : ({
		display: 'none', 
		opacity: 0
	});

	return (
		<div style={show}>
			{children}
		</div>
	);
};

const Profile = ({ config }) => {
	const { state: { update, read, passwordModal }  } = useProfileContext();

	const { id } = useSelector(selectUser);

	// using the crud redux to fetch and update the admin
	const entity = 'admin';
	const dispatch = useDispatch();

	dispatch(crud.read({ entity, id }));
	config = { ...config, id };

	return (
		<>
			<Visibility isVisible={read.isOpen}>
				<AdminInfo config={config} />
			</Visibility>
			<Visibility isVisible={update.isOpen}>
				<UpdateAdmin config={config} />
			</Visibility>
			<PasswordModal config={config} isVisible={passwordModal.isOpen} />
		</>
	);
}

export default Profile;
