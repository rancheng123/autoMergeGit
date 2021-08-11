var merge = require('./merge_lanhu_commands');

merge({
    //源分支
    origin_branch: 'rc-dev5',
    //目标分支
    target_branch: 'develop',
    //工作目录
    workPlace: '/Users/apple/workPlace/lanhu-ea-v2el-web',
    tag: {
        version: 'v0.8.1',
        msg: 'release v0.8.1'
    }
})
