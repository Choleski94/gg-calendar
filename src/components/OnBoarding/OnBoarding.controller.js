export const setModalSize = (isOnboarding = false, isCompleted = false) => {
	return isOnboarding && !isCompleted ? 'xl' : 'md';
}

export const setModalId = (isOnboarding = false, isCompleted = false) => {
	return isOnboarding && !isCompleted ? 'onboarding' : 'onboarding-get-started';
}
