import axios from "axios";
import type DevelopmentGroupModel from "../Models/DevelopmentGroupModel";

const REST_SERVER_URL = import.meta.env.VITE_REST_SERVER_URL;

class DevelopmentGroupsService {

    public async getAllGroups(): Promise<DevelopmentGroupModel[]> {

        const response = await axios.get<DevelopmentGroupModel[]>(
            `${REST_SERVER_URL}/development-groups`
        );

        return response.data;
    }

}

const developmentGroupsService = new DevelopmentGroupsService();

export default developmentGroupsService;
