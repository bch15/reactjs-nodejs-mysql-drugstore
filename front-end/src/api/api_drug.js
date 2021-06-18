import {getAxiosInstanceApi} from "./api";

export const getDrugs = (callback) => {
    getAxiosInstanceApi().get("drugs")
        .then(response => {
            const data = response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false, error);
        })
}
export const getFactor = (callback) => {
    getAxiosInstanceApi().get("factor")
        .then(response => {
            const data = response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false, error);
        })
}

export const newFactor = (data, callback) => {
    getAxiosInstanceApi().post("factor", data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false, error);
        });
}
export const newRizFactor =  (data, callback) => {
    const datas = {
        "daroo_name": data.daroo_name,
        "daroo_noskhe": data.daroo_noskhe,
        "daroo_bime": data.daroo_bime,
        "daroo_gheimat": data.daroo_gheimat,
        "daroo_tedad": data.daroo_tedad,
        "factor_id": data.factor_id,
        "name_sabt": data.name_sabt,
        "daroo_id": data.daroo_id
    }
    console.log("datas");
    console.log(datas);
     getAxiosInstanceApi().post("rizfactor", datas)
        .then(response => {
            const data = response.datas;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false, error);
        });
}
export const getRizFactor = (callback) => {
    getAxiosInstanceApi().get("rizfactor")
        .then(response => {
            const data = response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false, error);
        })
}