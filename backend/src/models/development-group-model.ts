import {
    Column,
    DataType,
    HasMany,
    Model,
    Table
} from "sequelize-typescript";

import MeetingModel from "./meeting-model";

@Table({
    tableName: "development_groups"
})
export default class DevelopmentGroupModel extends Model {

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    public id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    public name: string;

    @HasMany(() => MeetingModel)
    public meetings: MeetingModel[];
}