import { ListParams } from 'models/common';
import { Food } from 'models/food';
import axiosClient from './axiosClient';

const foodApi = {
	getFoods(type: string, params: ListParams): Promise<Food[]> {
		return axiosClient.get(type, { params });
	},

	getFoodById(id: string): Promise<Food[]> {
		const url = `/best-foods/${id}`;
		return axiosClient.get(url);
	},

	RemoveFoodById(id: string): Promise<any> {
		const url = `/best-foods/${id}`;
		return axiosClient.delete(url);
	},
};

export default foodApi;
