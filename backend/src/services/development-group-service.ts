import DevelopmentGroupModel from "../models/development-group-model";

class DevelopmentGroupService {

    public async getAllGroups(): Promise<DevelopmentGroupModel[]> {
        return DevelopmentGroupModel.findAll();
    }

}

const developmentGroupService = new DevelopmentGroupService();

export default developmentGroupService;