import axios from "axios";
import type DevelopmentGroupModel from "../Models/DevelopmentGroupModel";

class DevelopmentGroupsService {

    public async getAllGroups(): Promise<DevelopmentGroupModel[]> {

        const response = await axios.get<DevelopmentGroupModel[]>(
            "http://localhost:3000/development-groups"
        );

        return response.data;
    }

}

const developmentGroupsService = new DevelopmentGroupsService();

export default developmentGroupsService;