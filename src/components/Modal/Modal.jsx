import React from 'react';
import isNil from 'lodash/fp/isNil';

class Modal extends React.Component {
	componentDidMount() {
		document.body.classList.add('modal-open');
		window.addEventListener('keyup', this.handleKeyUp, false);
		document.addEventListener('mousedown', this.handleOutsideClick, false);
	}

	componentWillUnmount() {
		document.body.classList.remove('modal-open');
		window.removeEventListener('keyup', this.handleKeyUp, false);
		document.removeEventListener('mousedown', this.handleOutsideClick, false);
	}

	handleKeyUp = e => {
		const { onCloseRequest } = this.props;
		const keys = {
			27: () => {
				e.preventDefault();
				onCloseRequest();
				window.removeEventListener('keyup', this.handleKeyUp, false);
			}
		};

		if (keys[e.keyCode]) {
			keys[e.keyCode]();
		}
	};

	handleOutsideClick = e => {
		e.stopPropagation();
		const { onCloseRequest } = this.props;
		if (!isNil(this.modal)) {
			if (!this.modal.contains(e.target)) {
				onCloseRequest();
				document.removeEventListener(
					'mousedown',
					this.handleOutsideClick,
					false
				);
			}
		}
	};

	render() {
		const { id = 'wrapper', onCloseRequest, onSaveRequest, withFooter = false, title, children, size = 'md', centered = false } = this.props;

		return (
			<>
				<div key={`modal-${id}`} tabIndex={-1} role="dialog" className="modal fade show d-block">
					<div role="document" ref={node => (this.modal = node)} className={`modal-dialog modal-${size} ${centered ? 'modal-dialog-centered' : ''}`}>
						<div className="modal-content">
							<div className="modal-header">
								{title && title.length && (
									<h5 className="modal-title">
										{title}
									</h5>
								)}
								<button
									type="button"
									aria-label="Close"
									className="btn-close"
									data-bs-dismiss="modal"
									onClick={onCloseRequest}
								/>
							</div>
							<div className="modal-body">
								{children}
							</div>
							{withFooter && (
								<div className="modal-footer">
									<button type="button" className="btn btn-white" data-bs-dismiss="modal" onClick={onCloseRequest}>
										Close
									</button>
									<button type="button" className="btn btn-primary" onClick={onSaveRequest}>
										Save changes
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
				<div key={`modal-backgrop-${id}`} className="modal-backdrop fade show" />
			</>
		);
	}
}

export default Modal;
