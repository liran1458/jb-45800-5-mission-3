import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
} from "sequelize-typescript";

import DevelopmentGroupModel from "./development-group-model";

@Table({
    tableName: "meetings"
})
export default class MeetingModel extends Model {

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    public id: string;

    @ForeignKey(() => DevelopmentGroupModel)
    @Column({
        allowNull: false,
        type: DataType.UUID
    })
    public developmentGroupId: string;

    @Column({
        allowNull: false,
        type: DataType.DATE
    })
    public startDateTime: Date;

    @Column({
        allowNull: false,
        type: DataType.DATE
    })
    public endDateTime: Date;

    @Column({
        allowNull: false,
        type: DataType.TEXT
    })
    public description: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    public room: string;

    @BelongsTo(() => DevelopmentGroupModel)
    public developmentGroup: DevelopmentGroupModel;
}