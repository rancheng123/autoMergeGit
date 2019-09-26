
const chalk = require('chalk');
var child_process = require('child_process');
var exec = child_process.exec;

class CommandExecer {
    constructor (opts){
        this.opts = opts;
    }
    start(){
        this.execCommandQuene(this.opts.commandList)
    }
    execCommandQuene(){
        if(!global.execing){
            console.log('----------------------------  合并流程     开始 ------------------------------------------------')
            global.execing = true;
        }
        var commandItem = this.opts.commandList.shift();
        if(commandItem){
            this.execCommand({
                commandItem: commandItem,
                success: ()=>{
                    this.execCommandQuene(this.opts.commandList)
                }
            })
        }else{
            console.log('----------------------------  合并流程     结束 ------------------------------------------------')
            global.execing = false;
        }
    }
    execCommand(opts){
        exec(opts.commandItem.command,{
            cwd: this.opts.workPlace
        }, function(err,stdout,stderr){
            if(err) {

                if(stdout){
                    console.log( 'git 返回错误：  ' +  chalk.red(stdout) );
                }
                if(stderr){
                    console.log( 'git 返回错误：  ' +  chalk.red(stderr) );
                }

                return;
            } else {
                console.log(stdout);

                var msg = opts.commandItem.msg || opts.commandItem.command


                Log(
                    msg + '  完成',
                    'green'
                )

                opts.success && opts.success()
            }
        });
    }
}

function Log(text,color){
    if(!color){
        color = 'white'
    }
    console.log('+++++++++++++++++++++' + chalk[color](text) + '+++++++++++++++++++++' );
}

module.exports = CommandExecer


