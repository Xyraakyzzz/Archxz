const chalk = require("chalk");
const inquirer = require("inquirer");
const ora = require("ora");
function banner() {
  console.clear();
  console.log(chalk.white(`
..............                                    
            ..,;:ccc,.                            
          ......''';lxO.                          
.....''''..........,:ld;                          
           .';;;:::;,,.x,                         
      ..'''.            0Xxoc:,.  ...              
  ....                ,ONkc;,;cokOdc',.            
 .                   OMo           ':ddo.          
                    dMc               :OO;         
                    0M.                 .:o.       
                    ;Wd                                
                     ;XO,                              
                       ,d0Odlc;,..                     
                           ..',;:cdOOd::,.             
                                    .:d;.':;.          
                                       'd,  .'         
                                         ;l   ..       
                                          .o           
                                           c           
                                            '.         
                                             .
`));

  console.log(
  chalk.green("┌──(") +
  chalk.green("root㉿kali") +
  chalk.blue(")-[") +
  chalk.yellow("~/KyzzzNeko") +
  chalk.blue("]") +
  "\n" +
  chalk.blue("└─# ")
 );
}

async function menu() {
  banner();

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "[?] Select Menu",
      choices: [
        "[01] Install System",
        "[02] Update System",
        "[03] Login Panel",
        "[04] Deploy Project",
        "[00] Exit"
      ]
    }
  ]);

  if (answer.menu === "[01] Install System") {
    const spinner = ora("Installing system...").start();
    setTimeout(() => {
      spinner.succeed("Install completed!");
      menu();
    }, 2000);
  }

  else if (answer.menu === "[02] Update System") {
    const spinner = ora("Updating system...").start();
    setTimeout(() => {
      spinner.succeed("Update completed!");
      menu();
    }, 2000);
  }

  else if (answer.menu === "[03] Login Panel") {
    const login = await inquirer.prompt([
      { name: "username", message: "Username:" },
      { name: "password", message: "Password:" }
    ]);

    console.log(chalk.green("\nLogin success!"));
    console.log("Welcome " + login.username);
    setTimeout(menu, 1500);
  }

  else if (answer.menu === "[04] Deploy Project") {
    const spinner = ora("Deploying project...").start();
    setTimeout(() => {
      spinner.succeed("Deploy completed!");
      menu();
    }, 2000);
  }

  else {
    process.exit();
  }
}

menu();
