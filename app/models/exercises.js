module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('exercises', {
        exercise_id: 
         {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true,
            
        },
        title:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:
        {
            type: DataTypes.STRING
        },
        play_time:
        {
            type: DataTypes.FLOAT,
        },
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        skeleton:
        {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        pose_data:
        {
            type: DataTypes.TEXT('long')
        },
        thumb_url:
        {
            type: DataTypes.STRING
        },
        thumb_gif_url:
        {
            type: DataTypes.STRING
        },
        video_url:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reward:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        level:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        like_counts:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        view_counts:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status:
        {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "PENDING"
        },
        created_at: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },
    {
        timestamps: false
    })
}

