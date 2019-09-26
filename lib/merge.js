
var CommandExecer = require('./commandExecer');

function merge(opts){


    var remote_origin_branch = 'origin/' + opts.origin_branch;

    var tagCommand = []
    //线上环境，打tag
    if(opts.target_branch == 'rc'){

        var tagCommand = [
            {
                // tag
                command: "git tag -a "+ opts.tag.version +" -m '"+ opts.tag.msg +"'"
            }


            //  git push origin [tagname]
        ]
    }

    var commandList = [
        {
            //切到 目标分支
            command: 'git checkout ' + opts.target_branch,
            msg: ' 切到 '+ opts.target_branch
        },
        {
            //合并源分支 到当前分支
            command: 'git merge ' + remote_origin_branch,
            msg: '合并 '+remote_origin_branch + ' 到 当前分支' +opts.target_branch
        },
        {
            command: 'git pull'
        },

        /*

        //查看标签
            git tag

        //新建标签  -a（注释）

            git tag -a v1.4 -m 'my version 1.4'

        */
        /*{
            // tag
            command: "git tag -a V1.3 -m 'release 1.3'"
        },*/


        ...tagCommand,

        {
            command: 'git push'
        },
        {
            //切回 源分支
            command: 'git checkout ' + opts.origin_branch,
            msg: '切回 ' + opts.origin_branch
        },
    ]

    new CommandExecer({
        commandList: commandList,
        workPlace: opts.workPlace
    }).start()
}



module.exports = merge






