var merge = require('../lib/merge');

merge({
    //源分支
    origin_branch: 'dev',
    //源分支
    //origin_branch: 'dev',
    //目标分支
    target_branch: 'rc',
    //工作目录
    workPlace: '/Users/deo/WebstormProjects/workPlace/coffee-bar',
    tag: {
        version: 'V3.5',
        msg: 'release 3.5'
    }
})