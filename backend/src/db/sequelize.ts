import { Sequelize } from "sequelize-typescript";
import config from "config";
import DevelopmentGroupModel from "../models/development-group-model";
import MeetingModel from "../models/meeting-model";

const sequelize = new Sequelize({
    dialect: "mysql",
    models: [DevelopmentGroupModel, MeetingModel],
    logging: console.log,
    ...config.get("db")
});

console.log(`connected to database on `, config.get("db"));

export default sequelize;