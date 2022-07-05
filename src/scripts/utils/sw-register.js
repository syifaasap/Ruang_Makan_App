/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable import/no-unresolved */
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = () => {
	runtime.register();
};

export default swRegister;
