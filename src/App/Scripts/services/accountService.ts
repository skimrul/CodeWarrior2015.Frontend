﻿class AccountService {
    public getProfile(userName, accessToken) {
        var getUrl = new Constant().apiRoot + "/api/Account/UserProfile";
        //return $.get(getUrl);
        return $.ajax(getUrl, {
            type: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + accessToken
            }
        });
    }

    public saveProfile(data, accessToken) {
        var getUrl = new Constant().apiRoot + "/api/Account/UserProfile";
        return $.ajax(getUrl, {
            type: "POST",
            //contentType: "application/json;charset=utf-8",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + accessToken
            },
            data : data
        });
    }

    public getBuyerProfile(userName) {
        var getUrl = new Constant().apiRoot + "/api/Profiles/GetBuyerProfile/" + userName;

        return $.get(getUrl);
    }

    public getSellerProfile(userName) {
        var getUrl = new Constant().apiRoot + "/api/Profiles/GetSellerProfile/" + userName;

        return $.get(getUrl);
    }
} 