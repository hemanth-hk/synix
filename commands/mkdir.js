//importing filesystem
const fs=require('fs');

//function making the directory
function mkdir(path,FolderName){
    var new_path=path.concat(FolderName);
    try{
        fs.mkdir(new_path,(err) =>{
            if(err){
                throw err;
            }
        });
    }
    catch{
        console.log("Folder with this name already exists.");
    }
}

//exporting the mkdir function
module.exports = mkdir;