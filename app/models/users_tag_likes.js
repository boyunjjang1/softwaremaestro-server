module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('users_tag_likes', {
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tag_id: 
         { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
        }
        },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['user_id','tag_id']
                }
            ],
            timestamps: false
        });
    }
