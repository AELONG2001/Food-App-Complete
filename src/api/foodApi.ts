import { ListParams } from 'models/common';
import { Food } from 'models/food';
import axiosClient from './axiosClient';

const foodApi = {
	getFoods(type: string, params: ListParams): Promise<Food[]> {
		return axiosClient.get(type, { params });
	},
};

export default foodApi;
