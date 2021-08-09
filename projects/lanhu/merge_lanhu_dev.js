var merge = require('./merge_lanhu_commands');

merge({
    //源分支
    origin_branch: 'you',
    //目标分支
    target_branch: 'develop',
    //工作目录
    workPlace: '/Users/apple/workPlace/components',
    // tag: {
    //     version: 'V3.5',
    //     msg: 'release 3.5'
    // }
})
