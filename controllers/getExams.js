let { TYT } = require('../models/TYT'),
    { AYT } = require('../models/AYT'),
    { YDT } = require('../models/YDT'),
    User = require('../models/User'),
    { ObjectId } = require('mongoose').Types;

const getExams = async function (user_id,chunk,_exam) {
    try {
        var user = await User.findById(user_id);
    } catch (err) {
        return false;
    }
    
    switch (_exam) {
        case 't':
            var exams = user.tyts,exam_keys = Object.keys(user.tyts);
            break;
        case 'a':
            var exams = user.ayts,exam_keys = Object.keys(user.ayts);
            break;
        case 'y':
            var exams = user.ydts,exam_keys = Object.keys(user.ydts);
            break;
    }
    
    var exam_len = exam_keys.length,
        i = exam_len-(chunk-1)*10-1,
        i = i==-1?0:i,
        min = i-10<0?-1:i-10,
        finds = Array();
    
    for (; i > min; i--){
        finds.push(ObjectId(exams[i]));
    }
    switch (_exam) {
        case 't':
            datas = await TYT.find({ _id: { $in: finds } });
            break;
        case 'a':
            datas = await AYT.find({ _id: { $in: finds } });
            break;
        case 'y':
            datas = await YDT.find({ _id: { $in: finds } });
            break;
    }

    return { datas: datas.reverse(), exam_len: exam_len };
}

module.exports = getExams;

