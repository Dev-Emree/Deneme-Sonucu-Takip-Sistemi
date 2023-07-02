let { TYT } = require("../models/TYT"),
    { AYT } = require("../models/AYT"),
    { YDT } = require("../models/YDT");

const setPublic = async function (id, examName) {
    try {
        switch (examName) {
            case "ty":
                var exam = await TYT.findById(id);
                break;
            case "ay":
                var exam = await AYT.findById(id);
                break;
            case "yd":
                var exam = await YDT.findById(id);
                break;
        }
    } catch (e) {
        return "ID not found";
    }

    exam.public = !exam.public;
    try {
        await exam.save();
        return exam.public;
    } catch (e) {
        return e;
    }
};

const publicExam = async function (examName, id) {
    try {
        switch (examName) {
            case "tyt":
                var exam = await TYT.findById(id);
                if (!exam.public) return false;
                return {
                    examName: exam.examName,
                    username: exam.username,
                    Turkce: exam.Turkce,
                    Sosyal: exam.Sosyal,
                    Matematik: exam.Matematik,
                    Fen: exam.Fen,
                    Total: exam.Total
                };
            case "ayt":
                var exam = await AYT.findById(id);
                return {
                    examName: exam.examName,
                    username: exam.username,
                    Turkce: exam.Turkce,
                    Sosyal: exam.Sosyal,
                    Matematik: exam.Matematik,
                    Fen: exam.Fen,
                    MF_Total: exam.MF_Total,
                    TM_Total: exam.TM_Total,
                    TS_Total: exam.TS_Total,
                };
            case "ydt":
                var exam = await YDT.findById(id);
                return {
                    examName: exam.examName,
                    username: exam.username,
                    lang: exam.lang,
                    Total: exam.Total
                };
            default:
                return false;
        }
    } catch (e) {
        return false;
    }
};

module.exports = {
    setPublic,
    publicExam
};
