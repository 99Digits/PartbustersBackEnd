const xldata=require('./demoschema')
const xlsx=require('xlsx')
exports.Datajson = async (req, res) => {
    const file = req.file;
    try {
      const workbook = xlsx.readFile(file.path);
      const sheetname = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetname];
      const jsonData = xlsx.utils.sheet_to_json(sheet);
  
    //   for (const data of jsonData) {
    //     const newData = await xldata.create({
    //       slno: data.slno,
    //       companyname: data.companyname,
    //       companyurl: data.companyurl,
    //       comments: data.comments,
    //     });
        
    //   }
    const newDataArray = jsonData.map((data) => ({
        modelno: data.modelno,
        configid: data.configid,
        fileurl: data.fileurl,
        archivepath: data.archivepath,
        filetype:data.filetype
      }));
      
      await xldata.insertMany(newDataArray);
    //   await xldata.save();
      return res.status(200).json('Data saved successfully');
    } catch (err) {
      console.error(err);
      return res.status(400).json('An error occurred while saving data');
    }
  };
  