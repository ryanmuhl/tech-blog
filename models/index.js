const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comments');

User.hasMany(Post, {
    foreignKey: 'user-id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})