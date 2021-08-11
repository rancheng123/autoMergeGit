




var CommandExecer = require('../../lib/commandExecer');

function merge_lanhu_commands(opts){


    var remote_origin_branch = 'origin/' + opts.origin_branch;
    var remote_target_branch = 'origin/' + opts.target_branch;

    var tagCommand = []
    if(opts.tag){

        var tagCommand = [
            {
                // tag
                command: "git tag -a "+ opts.tag.version +" -m '"+ opts.tag.msg +"'"
            },
            {
                // tag
                command: "git push origin "+ opts.tag.version
            }


            //  git push origin [tagname]
        ]
    }

    var commandList = [

        {
            command: 'git fetch',
            msg: ' 更新资源'
        },




        //将他人代码  合到 自己的分支
        {
            command: 'git checkout ' + opts.origin_branch,
            msg: ' 切到 '+ opts.origin_branch
        },
        {
            command: 'git merge ' + remote_target_branch,
            msg: '合并 '+remote_target_branch + ' 到 当前分支' +opts.origin_branch
        },
        {
            command: 'git push',
            msg: ' push 到 ' + remote_origin_branch
        },


        //将自己代码  合到 dev
        {
            command: 'git checkout ' + opts.target_branch,
            msg: ' 切到 '+ opts.target_branch
        },
        {
            command: 'git merge ' + opts.origin_branch,
            msg: '合并 '+opts.origin_branch + ' 到' +opts.target_branch
        },

        {
            command: 'git push',
            msg: 'push 到' + remote_target_branch
        },

        ...tagCommand,


        //切回自己的分支
        {
            command: 'git checkout ' + opts.origin_branch,
            msg: ' 切到 '+ opts.origin_branch
        },


    ]

    new CommandExecer({
        commandList,
        workPlace: opts.workPlace
    }).start()
}



module.exports = merge_lanhu_commands






