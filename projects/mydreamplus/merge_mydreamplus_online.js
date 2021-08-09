var merge = require('./merge_mydreamplus_commands');

merge({
    //源分支
    origin_branch: 'dev',
    //源分支
    //origin_branch: 'dev',
    //目标分支
    target_branch: 'online',
    //工作目录
    workPlace: '/Users/deo/WebstormProjects/workPlace/businessDir/operation',
    tag: {
        version: 'V3.5',
        msg: 'release 3.5'
    }
})
